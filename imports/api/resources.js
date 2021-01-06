import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import linkPreviewGenerator from "link-preview-generator";
import shurley from "shurley";

export const ResourcesCollection = new Mongo.Collection("resources");

Meteor.methods({
  "resources.insert"(options) {
    const newRefId = Meteor.call("refs.insert", {
      ...options,
    });

    return ResourcesCollection.insert({
      parentId: newRefId,
      createdAt: Date.now(),
      createdBy: Meteor.userId(),
      url: "",
    });
  },

  "resources.update"(id, url) {
    const parsedUrl = shurley.parse(url);

    const previewData = async () => {
      const result = await linkPreviewGenerator(parsedUrl);
      return result;
    };
    return previewData().then((data) =>
      ResourcesCollection.update(id, { $set: { data: data } })
    );
  },
});
