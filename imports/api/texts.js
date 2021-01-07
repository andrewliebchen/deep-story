import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const TextsCollection = new Mongo.Collection("texts");

Meteor.methods({
  "texts.insert"(options) {
    const newRefId = Meteor.call("refs.insert", {
      ...options,
    });

    return TextsCollection.insert({
      parentId: newRefId,
      createdAt: Date.now(),
      createdBy: Meteor.userId(),
    });
  },

  "texts.update"(id, options) {
    return TextsCollection.update(id, { $set: options });
  },
});
