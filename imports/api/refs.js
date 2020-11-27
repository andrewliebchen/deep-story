import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const RefsCollection = new Mongo.Collection("refs");

Meteor.methods({
  "refs.insert"(options) {
    const newRefId = RefsCollection.insert({
      ...options,
      story: [],
    });

    // TODO: Need to make this work if the parent isn't a user.
    Meteor.users.update(options.parentId, {
      $push: { "profile.story": newRefId },
    });

    return newRefId;
  },

  "refs.update"(id, options) {
    return RefsCollection.update(id, { $set: options });
  },

  "refs.remove"(id) {
    return RefsCollection.remove(id);
  },
});
