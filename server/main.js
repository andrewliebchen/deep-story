import { RefsCollection } from "../imports/api/refs";

ServiceConfiguration.configurations.upsert(
  { service: "google" },
  {
    $set: {
      loginStyle: "popup",
      clientId: Meteor.settings.private.google.clientId,
      secret: Meteor.settings.private.google.secret,
    },
  }
);
