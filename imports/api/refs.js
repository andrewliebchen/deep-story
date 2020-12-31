import { generators } from "../utils/mockGenerators";
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import casual from "casual";
import linkPreviewGenerator from "link-preview-generator";
import shurley from "shurley";

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
      Meteor.call("refs.updateSchemaType", newRefId, "person");
    }

    return newRefId;
  },

  "refs.update"(id, options) {
    return RefsCollection.update(id, { $set: options });
  },

  "refs.remove"(id) {
    return RefsCollection.remove(id);
  },

  "refs.scaffoldMock"(id, schema) {
    const generatedData = casual[schema]();

    return RefsCollection.update(id, {
      $set: {
        data: generatedData,
      },
    });
  },

  "refs.refreshMockData"(id, generator) {
    let newData = {};
    newData[generator] = casual[generator];

    return RefsCollection.update(id, { $set: newData });
  },

  "refs.removeMockData"(id, generator) {
    const ref = RefsCollection.findOne(id);
    delete ref.data[generator];

    return RefsCollection.update(id, {
      $set: { data: ref.data },
    });
  },

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
