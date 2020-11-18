import React, { useState } from "react";
import { Box, Button, Flex, IconButton, Input, Heading, Text } from "theme-ui";
import { User, X } from "react-feather";
import PropTypes from "prop-types";

const UserToggle = (props) => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [value, setValue] = useState("");

  return (
    <Box>
      <IconButton
        title={`Switch from ${props.currentUser}`}
        onClick={() => setShowOverlay(true)}
      >
        <User />
      </IconButton>

      {showOverlay && (
        <Flex
          sx={{
            alignItems: "center",
            height: "100vh",
            justifyContent: "center",
            position: "fixed",
            width: "100vw",
            top: 0,
            left: 0,
            bg: "background",
            zIndex: 1,
          }}
        >
          <Box sx={{ width: "30vw" }}>
            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Heading>Who are you?</Heading>
              <IconButton title="Cancel" onClick={() => setShowOverlay(false)}>
                <X />
              </IconButton>
            </Flex>
            <Input
              placeholder="Enter your id"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              mb={3}
            />
            <Button
              onClick={() => {
                props.setCurrentUser(value);
                setValue("");
                setShowOverlay(false);
              }}
            >
              Get going
            </Button>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

UserToggle.propTypes = {
  currentUser: PropTypes.string,
  setCurrentUser: PropTypes.func,
};

export default UserToggle;
