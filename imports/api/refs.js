import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import linkPreviewGenerator from "link-preview-generator";
import shurley from "shurley";
import axios from "axios";

export const RefsCollection = new Mongo.Collection("refs");

Meteor.methods({
  "refs.insert"(options) {
    const newRefId = RefsCollection.insert({
      createdAt: Date.now(),
      createdBy: Meteor.userId(),
      showTitle: true,
      ...options,
    });

    if (options.type === "mock") {
      Meteor.call("refs.scaffoldMock", newRefId, "person");
    }

    return newRefId;
  },

  "refs.update"(id, options) {
    return RefsCollection.update(id, { $set: options });
  },

  "refs.remove"(id) {
    return RefsCollection.remove(id);
  },

  "refs.scaffoldMock"(id, generator) {
    axios.get("https://randomuser.me/api/").then((response) => {
      const data = response.data.results[0];
      const formattedData = {
        name: `${data.name.first} ${data.name.last}`,
        image: data.picture.medium,
        username: data.login.username,
        age: data.dob.age,
        email: data.email,
      };

      RefsCollection.update(id, {
        $set: {
          data: formattedData,
        },
      });
    });
  },

  // "refs.updateMockData"(id, generator) {
  //   const ref = RefsCollection.findOne(id);
  //   ref.data[generator] = casual[generator];
  //
  //   return RefsCollection.update(id, { $set: { data: ref.data } });
  // },
  //
  // "refs.removeMockData"(id, generator) {
  //   const ref = RefsCollection.findOne(id);
  //   delete ref.data[generator];
  //
  //   return RefsCollection.update(id, {
  //     $set: { data: ref.data },
  //   });
  // },

  "refs.insertLink"(args) {
    return RefsCollection.insert({
      createdAt: Date.now(),
      createdBy: Meteor.userId(),
      type: "link",
      ...args,
    });
  },

  "refs.updateResourceUrl"(id, resourceUrl) {
    const parsedUrl = shurley.parse(resourceUrl);

    const previewData = async () => {
      const result = await linkPreviewGenerator(parsedUrl);
      return result;
    };

    RefsCollection.update(id, {
      $set: { resourceUrl: resourceUrl },
    });

    return previewData().then((data) =>
      RefsCollection.update(id, { $set: { data: data } })
    );
  },
});
