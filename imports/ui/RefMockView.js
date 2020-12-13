import React from "react";
import { Avatar, Box, Text, Flex } from "theme-ui";
import PropTypes from "prop-types";
import { mockTypes } from "../utils/types";

const RefMockView = (props) => (
  <Box
    sx={{
      variant: "flex.ref",
      border: "4px solid",
      borderColor: "muted",
      "&:hover": { borderColor: "background" },
    }}
  >
    <Flex>
      {props.data.image && <Avatar src={props.data.image} size={108} />}
      <Box sx={{ ml: 3 }}>
        {Object.keys(props.data).map((key) => (
          <Flex key={key}>
            <Text sx={{ fontWeight: "bold", mr: 2 }}>{key}</Text>
            <Text>{props.data[key]}</Text>
          </Flex>
        ))}
      </Box>
    </Flex>
  </Box>
);

export default RefMockView;
