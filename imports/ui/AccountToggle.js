import { Avatar, Box, Button } from "theme-ui";
import { Meteor } from "meteor/meteor";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import { controlHeight } from "../utils/theme";
import { useHistory } from "react-router-dom";

const AccountToogle = (props) => {
  const { user } = useContext(AppContext);
  const history = useHistory();

  return (
    <Box {...props}>
      {user ? (
        <Avatar
          src={user.services.google.picture}
          sx={{
            variant: "button.floating",
            p: 0,
            height: controlHeight,
            width: controlHeight,
          }}
          onClick={() => Meteor.logout((error) => history.push("/"))}
        />
      ) : (
        <Button
          variant="button.floatingPrimary"
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
