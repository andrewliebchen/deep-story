import { Box, Button, Card, Flex, Heading, Text } from "theme-ui";
import { isReady } from "../utils/helpers";
import capitalize from "capitalize";
import PropTypes from "prop-types";
import React from "react";
import { MoreVertical } from "react-feather";

const imageSize = 120;

const RefMockView = (props) =>
  isReady(props.data) && (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Flex
        sx={{
          variant: "flex.imageWrapper",
          backgroundImage: `url(${props.data.image})`,
        }}
      />
      {
        <Box sx={{ mr: 3, flexGrow: 2 }}>
          <Heading>{props.data.name || props.data.title}</Heading>
          <Text sx={{ color: "textSecondary" }}>Person</Text>
        </Box>
      }
    </Flex>
  );

RefMockView.propTypes = {
  data: PropTypes.object,
  showTitle: PropTypes.bool,
  title: PropTypes.string,
};

export default RefMockView;
