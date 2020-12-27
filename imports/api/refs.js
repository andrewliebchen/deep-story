import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { mockTypes } from "../utils/types";
import jsf from "json-schema-faker";
import faker from "faker";
import fakerKeys from "../utils/fakerKeys";

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

  "refs.refreshMockData"(id, schema, key) {
    let newData = {};
    newData[`data.${key}`] = faker.fake(
      `{{${mockTypes[schema].properties[key].faker}}}`
    );

    return RefsCollection.update(id, { $set: newData });
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
});
