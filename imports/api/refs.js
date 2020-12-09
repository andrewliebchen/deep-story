import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const RefsCollection = new Mongo.Collection("refs");

Meteor.methods({
  "refs.insert"(options, position) {
    return RefsCollection.insert({
      createdAt: Date.now(),
      cretedBy: Meteor.userId(),
      ...options,
    });
  },

  "refs.update"(id, options) {
    return RefsCollection.update(id, { $set: options });
  },

  "refs.remove"(id) {
    return RefsCollection.remove(id);
  },
});
