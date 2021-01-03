import { Card, Flex, Text, Box, Button, Link } from "theme-ui";
import { ExternalLink } from "react-feather";
import PropTypes from "prop-types";
import React from "react";
import { isReady } from "../utils/helpers";

const RefResourceView = (props) =>
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
          backgroundImage: `url(${props.data.img})`,
        }}
      />
      <Box sx={{ mr: 3 }}>
        <Link
          href={props.resourceUrl}
          target="_blank"
          sx={{ fontWeight: "bold" }}
        >
          {props.data.title}
        </Link>
        <Text sx={{ color: "textSecondary" }}>{props.data.description}</Text>
      </Box>
    </Flex>
  );

RefResourceView.propTypes = {
  isHovering: PropTypes.bool,
  isParentRef: PropTypes.bool,
  resourceUrl: PropTypes.string,
};

export default RefResourceView;
