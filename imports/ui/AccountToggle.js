import { Avatar, Box, Button } from "theme-ui";
import { Meteor } from "meteor/meteor";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import { controlHeight } from "../utils/theme";
import { useHistory } from "react-router-dom";

const AccountToogle = () => {
  const { user } = useContext(AppContext);
  const history = useHistory();

  return (
    <Box>
      {user ? (
        <Avatar
          src={user.services.google.picture}
          sx={{
            variant: "button.floating",
            p: 0,
            height: controlHeight,
            width: controlHeight,
          }}
          onClick={() =>
            Meteor.logout((error) => window.location.replace("/login"))
          }
        />
      ) : (
        <Button
          variant="button.floatingPrimary"
          onClick={() =>
            Meteor.loginWithGoogle(
              {
                loginStyle: "popup",
              },
              (error) => {
                // Need to go to the ref the represents the user
                history.push("/refs");
              }
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
