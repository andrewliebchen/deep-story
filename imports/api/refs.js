import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { mockTypes } from "../utils/types";
import jsf from "json-schema-faker";
import faker from "faker";
import fakerKeys from "../utils/fakerKeys";
import linkPreviewGenerator from "link-preview-generator";
import shurley from "shurley";

jsf.extend("faker", () => require("faker"));

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

  "refs.updateSchemaType"(id, schema) {
    const generatedData = jsf.generate(mockTypes[schema]);

    return RefsCollection.update(id, {
      $set: {
        schema: schema,
        data: generatedData,
      },
    });
  },

  "refs.remove"(id) {
    return RefsCollection.remove(id);
  },

  "refs.refreshMockData"(id, key, source = "data") {
    let newData = {};
    newData[`${source}.${key}`] = faker.fake(`{{${fakerKeys[key]}}}`);

    return RefsCollection.update(id, { $set: newData });
  },

  "refs.removeMockField"(id, key) {
    const ref = RefsCollection.findOne(id);
    delete ref.customFieldData[key];

    return RefsCollection.update(id, {
      $set: { customFieldData: ref.customFieldData },
    });
  },

  "refs.updateCustomMockData"(id, key) {
    let newCustomFieldData = {};
    newCustomFieldData[`customFieldData.${key}`] = faker.fake(
      `{{${fakerKeys[key]}}}`
    );

    return RefsCollection.update(id, { $set: newCustomFieldData });
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
