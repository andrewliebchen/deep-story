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
        <Text sx={{ fontWeight: "bold" }}>{props.data.title}</Text>
        <Text sx={{ color: "textSecondary" }}>{props.data.description}</Text>
      </Box>
      <Box sx={{ size: "control", flexShrink: 0 }}>
        {props.isHovering && (
          <Link href={props.resourceUrl} target="_blank">
            <Button
              sx={{
                flexShrink: 0,
                variant: `button.${
                  props.isParentRef ? "secondary" : "background"
                }`,
              }}
              title="Open resource"
              children={<ExternalLink />}
            />
          </Link>
        )}
      </Box>
    </Flex>
  );

RefResourceView.propTypes = {
  isHovering: PropTypes.bool,
  isParentRef: PropTypes.bool,
  resourceUrl: PropTypes.string,
};

export default RefResourceView;
