import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const RefsCollection = new Mongo.Collection("refs");

Meteor.methods({
  "refs.insert"(options, parentIsUser, position) {
    const newRefId = RefsCollection.insert({
      ...options,
      story: [],
    });

    // Check if this is a user or not, update the correct thing
    if (parentIsUser) {
      Meteor.users.update(options.parentId, {
        $push: {
          "profile.story": {
            $each: [newRefId],
            $position: position,
          },
        },
      });
    } else {
      RefsCollection.update(options.parentId, {
        $push: { story: newRefId },
      });
    }

    return newRefId;
  },

  "refs.update"(id, options) {
    return RefsCollection.update(id, { $set: options });
  },

  "refs.remove"(id) {
    return RefsCollection.remove(id);
  },
});
