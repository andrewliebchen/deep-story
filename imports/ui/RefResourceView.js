import { Card, Flex, Text, Box, Button, Link } from "theme-ui";
import { UilBrowser } from "@iconscout/react-unicons";
import PropTypes from "prop-types";
import React from "react";
import { isReady } from "../utils/helpers";

const RefResourceView = (props) =>
  isReady(props.data) && (
    <Card sx={{ alignItems: "center", bg: props.isParentRef && "background" }}>
      <Flex
        sx={{
          variant: "flex.imageWrapper",
          backgroundImage: `url(${props.data.img})`,
        }}
      />
      <Box sx={{ mr: 3, flexGrow: 2 }}>
        <Text sx={{ fontWeight: "bold" }}>{props.data.title}</Text>
        <Text sx={{ color: "textSecondary" }}>{props.data.description}</Text>
      </Box>
      {props.isHovering ? (
        <Link href={props.resourceUrl} target="_blank">
          <Button
            sx={{
              variant: `button.${
                props.isParentRef ? "secondary" : "background"
              }`,
            }}
            title="Open resource"
            children={<UilBrowser />}
          />
        </Link>
      ) : (
        <Box width="control" />
      )}
    </Card>
  );

RefResourceView.propTypes = {
  isHovering: PropTypes.bool,
  isParentRef: PropTypes.bool,
  resourceUrl: PropTypes.string,
};

export default RefResourceView;
