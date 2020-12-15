import React from "react";
import { Avatar, Box, Button, Text, Flex, Heading } from "theme-ui";
import PropTypes from "prop-types";
import { mockTypes } from "../utils/types";

const imageSize = 72;

const RefMockView = (props) => (
  <Box
    sx={{
      variant: "flex.ref",
      border: "4px solid",
      borderColor: "muted",
    }}
  >
    {props.data && (
      <Flex sx={{ alignItems: "center" }}>
        {props.data.image && (
          <Avatar
            src={props.data.image}
            sx={{ height: imageSize, width: imageSize }}
          />
        )}
        <Box sx={{ ml: 3 }}>
          {props.nickname && <Heading>{props.nickname}</Heading>}
          {Object.keys(props.data).map(
            (key) =>
              key !== "image" && (
                <Flex key={key}>
                  <Text sx={{ fontWeight: "bold", mr: 2 }}>{key}</Text>
                  <Text>{props.data[key]}</Text>
                </Flex>
              )
          )}
        </Box>
      </Flex>
    )}
    <Button sx={{ variant: "button.default", mt: 3, width: "100%" }}>
      See all parameters
    </Button>
  </Box>
);

export default RefMockView;
