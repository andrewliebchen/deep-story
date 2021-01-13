import { Avatar, Box, Button, Flex, Text, useColorMode } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useAccount } from "../utils/hooks";
import { useHistory, Redirect } from "react-router-dom";
import React, { useRef } from "react";
import useHover from "@react-hook/hover";
import { Moon, Sun, LogOut } from "react-feather";

const AccountToogle = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const { user, isLoggedIn } = useAccount();

  const target = useRef(null);
  const isHovering = useHover(target);

  return (
    <Box
      ref={target}
      sx={{
        position: "relative",
        height: "control",
        minWidth: "control",
      }}
    >
      {user ? (
        isHovering ? (
          <Flex
            sx={{
              variant: "flex.dropdownMenu",
              right: -3,
            }}
          >
            <Flex sx={{ gap: 2, alignItems: "center" }}>
              <Avatar src={user.services && user.services.google.picture} />
              <Text>{user.profile.name}</Text>
              <Button
                sx={{ variant: "button.secondary", ml: "auto" }}
                onClick={() => Meteor.logout()}
                title="Log out"
              >
                <LogOut />
              </Button>
            </Flex>
            <Button
              sx={{ variant: "button.secondary" }}
              onClick={() =>
                setColorMode(colorMode === "default" ? "dark" : "default")
              }
            >
              Toggle {colorMode === "default" ? "Dark" : "Light"}
            </Button>
          </Flex>
        ) : (
          <Avatar src={user.services && user.services.google.picture} />
        )
      ) : (
        <Button
          variant="button.primary"
          onClick={() => Meteor.loginWithGoogle({ loginStyle: "redirect" })}
        >
          Log in with Google
        </Button>
      )}
    </Box>
  );
};

export default AccountToogle;
