import { Avatar, Box, Button } from "theme-ui";
import PropTypes from "prop-types";
import React from "react";
import AppContext from "./AppContext";
import { Meteor } from "meteor/meteor";

const AccountToogle = () => (
  <AppContext.Consumer>
    {(props) => (
      <Box>
        {props.user ? (
          <Avatar
            src={props.user.services.google.picture}
            sx={{ height: 36, width: 36 }}
            onClick={() =>
              Meteor.logout(
                (error) => error || window.location.replace("/login")
              )
            }
          />
        ) : (
          <Button
            onClick={() =>
              Meteor.loginWithGoogle({
                loginStyle: "popup",
              })
            }
          >
            Login
          </Button>
        )}
      </Box>
    )}
  </AppContext.Consumer>
);

AccountToogle.propTypes = {
  user: PropTypes.object,
};

export default AccountToogle;
