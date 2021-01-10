import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import axios from "axios";

export const MocksCollection = new Mongo.Collection("mocks");

const formatData = (data) => {
  return {
    name: `${data.name.first} ${data.name.last}`,
    image: data.picture.medium,
    username: data.login.username,
    age: data.dob.age,
    email: data.email,
  };
};

Meteor.methods({
  "mocks.insert"(options) {
    let result = {};
    Meteor.call(
      "refs.insert",
      {
        ...options,
      },
      (error, id) => {
        result.parentRefId = id;
        axios.get("https://randomuser.me/api/").then((response) => {
          const newMockId = MocksCollection.insert({
            parentId: id,
            createdAt: Date.now(),
            createdBy: Meteor.userId(),
            data: formatData(response.data.results[0]),
          });

          result.id = newMockId;
        });
      }
    );

    return result;
  },

  "mocks.removeField"(id, key) {
    const mock = MocksCollection.findOne(id);
    delete mock.data[key];

    return MocksCollection.update(id, {
      $set: { data: mock.data },
    });
  },

  "mocks.refreshData"(id) {
    axios.get("https://randomuser.me/api/").then((response) =>
      MocksCollection.update(id, {
        $set: { data: formatData(response.data.results[0]) },
      })
    );
  },
});
