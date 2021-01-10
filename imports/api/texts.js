import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const TextsCollection = new Mongo.Collection("texts");

Meteor.methods({
  "texts.insert"(options) {
    const newParentRefId = Meteor.call("refs.insert", {
      ...options,
    });

    const newTextId = TextsCollection.insert({
      parentId: newParentRefId,
      createdAt: Date.now(),
      createdBy: Meteor.userId(),
      text: "",
    });

    return {
      parentRefId: newParentRefId,
      id: newTextId,
    };
  },

  "texts.update"(id, options) {
    return TextsCollection.update(id, { $set: options });
  },
});
