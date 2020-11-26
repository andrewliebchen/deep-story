import { Avatar, Box, Button } from "theme-ui";
import { Meteor } from "meteor/meteor";
import AppContext from "./AppContext";
import React, { useContext } from "react";

const AccountToogle = () => {
  const { user } = useContext(AppContext);

  return (
    <Box>
      {user ? (
        <Avatar
          src={user.services.google.picture}
          sx={{ height: 36, width: 36 }}
          onClick={() =>
            Meteor.logout((error) => window.location.replace("/login"))
          }
        />
      ) : (
        <Button
          onClick={() =>
            Meteor.loginWithGoogle(
              {
                loginStyle: "popup",
              },
              (error) => {
                // Need to go to the ref the represents the user
                window.location.replace(`/r/${Meteor.userId()}`);
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
