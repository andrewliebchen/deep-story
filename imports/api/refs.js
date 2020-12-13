import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { mockTypes } from "../utils/types";
import jsf from "json-schema-faker";

jsf.extend("faker", () => require("faker"));

export const RefsCollection = new Mongo.Collection("refs");

Meteor.methods({
  "refs.insert"(options) {
    return RefsCollection.insert({
      createdAt: Date.now(),
      createdBy: Meteor.userId(),
      showTitle: true,
      ...options,
    });
  },

  "refs.update"(id, options) {
    return RefsCollection.update(id, { $set: options });
  },

  "refs.changeSchemaType"(id, schema) {
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
});
