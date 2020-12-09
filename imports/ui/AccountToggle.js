import { Avatar, Box, Button } from "theme-ui";
import { controlHeight } from "../utils/theme";
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
            variant: "button.default",
            p: 0,
            height: controlHeight,
            width: controlHeight,
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
