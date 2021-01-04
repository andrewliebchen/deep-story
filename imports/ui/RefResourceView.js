import { Card, Flex, Text, Box, Button, Link, Image } from "theme-ui";
import { ExternalLink } from "react-feather";
import PropTypes from "prop-types";
import React from "react";
import { isReady } from "../utils/helpers";

const RefResourceView = (props) =>
  isReady(props.data) && (
    <Box>
      <Image src={props.data.img} sx={{ borderRadius: 3 }} />
      <Box sx={{ mt: 3 }}>
        <Link
          href={props.resourceUrl}
          target="_blank"
          sx={{ fontWeight: "bold" }}
        >
          {props.data.title}
        </Link>
        <Text sx={{ color: "textSecondary" }}>{props.data.description}</Text>
      </Box>
    </Box>
  );

RefResourceView.propTypes = {
  isHovering: PropTypes.bool,
  isParentRef: PropTypes.bool,
  resourceUrl: PropTypes.string,
};

export default RefResourceView;
