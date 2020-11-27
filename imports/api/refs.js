import { Mongo } from "meteor/mongo";
import yallist from "yallist";

export const RefsCollection = new Mongo.Collection("refs");

Meteor.methods({
  "refs.insert"(options) {
    return RefsCollection.insert({ ...options, story: yallist.create() });
  },

  "refs.update"(id, options) {
    return RefsCollection.update(id, { $set: options });
  },

  "refs.remove"(id) {
    return RefsCollection.remove(id);
  },
});
