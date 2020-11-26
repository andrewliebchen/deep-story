import { Accounts } from "meteor/accounts-base";
import { RefsCollection } from "../imports/api/refs";
import yallist from "yallist";

Accounts.onCreateUser((options, user) => {
  user.profile = options.profile || {};
  user.profile.story = yallist.create();

  return user;
});

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
