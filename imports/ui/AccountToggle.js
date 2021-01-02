import { Avatar, Box, Button } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useAccount } from "../utils/hooks";
import { useHistory } from "react-router-dom";
import React from "react";

const AccountToogle = (props) => {
  const { user } = useAccount();
  const history = useHistory();

  return user ? (
    <Avatar
      src={user.services && user.services.google.picture}
      onClick={() => Meteor.logout((error) => history.push("/login"))}
    />
  ) : (
    <Button
      variant="button.primary"
      onClick={() =>
        Meteor.loginWithGoogle(
          {
            loginStyle: "popup",
          },
          (error) => history.push("/refs")
        )
      }
    >
      Log in with Google
    </Button>
  );
};

export default AccountToogle;
