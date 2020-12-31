import { Box, Button, Card, Flex, Heading, Text } from "theme-ui";
import { isReady } from "../utils/helpers";
import capitalize from "capitalize";
import PropTypes from "prop-types";
import React from "react";
import UilEllipsisV from "@iconscout/react-unicons/icons/uil-ellipsis-v";

const imageSize = 120;

const RefMockView = (props) => {
  return (
    isReady(props.data) && (
      <Card
        sx={{ bg: props.isParentRef && "background", alignItems: "center" }}
      >
        <Flex
          sx={{
            variant: "flex.imageWrapper",
            backgroundImage: `url(${props.data.image})`,
          }}
        />
        <Box sx={{ mr: 3, flexGrow: 2 }}>
          <Heading>{props.data.name || props.data.title}</Heading>
          <Text sx={{ color: "textSecondary" }}>
            {capitalize(props.schema)}
          </Text>
        </Box>
        {props.isHovering ? (
          <Button
            children={<UilEllipsisV />}
            sx={{
              variant: `button.${
                props.isParentRef ? "secondary" : "background"
              }`,
            }}
            title="Show all fields"
          />
        ) : (
          <Box width="control" />
        )}
      </Card>
    )
  );
};

RefMockView.propTypes = {
  data: PropTypes.object,
  showTitle: PropTypes.bool,
  title: PropTypes.string,
};

export default RefMockView;
