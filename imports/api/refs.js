import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const RefsCollection = new Mongo.Collection("refs");

Meteor.methods({
  "refs.insert"(options, position) {
    const newRefId = RefsCollection.insert({
      ...options,
      story: [],
    });

    // Check if this ref is parent or not, then update the parent's story list.
    options.parentId &&
      RefsCollection.update(options.parentId, {
        $push: { story: newRefId },
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
