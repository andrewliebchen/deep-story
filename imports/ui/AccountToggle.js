import { Avatar, Box, Button } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useAccount } from "../utils/hooks";
import { useHistory } from "react-router-dom";
import React from "react";

const AccountToogle = (props) => {
  const { user } = useAccount();
  const history = useHistory();

  return (
    <Box {...props}>
      {user ? (
        <Avatar
          src={user.services.google.picture}
          sx={{
            variant: "button.secondary",
            p: 0,
            size: "control",
          }}
          onClick={() => Meteor.logout((error) => history.push("/"))}
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
          Login
        </Button>
      )}
    </Box>
  );
};

export default AccountToogle;
