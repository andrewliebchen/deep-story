import React, { useState } from "react";
import { Flex, Text, Button, Select, Input, IconButton } from "theme-ui";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import PropTypes from "prop-types";
import UilRefresh from "@iconscout/react-unicons/icons/uil-refresh";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";

const CustomParams = (props) => {
  return (
    <Flex sx={{ variant: "flex.ref", mt: 2, flexDirection: "column" }}>
      {Object.keys(props.customParamData).map((key) => (
        <Flex key={key} sx={{ mb: 3 }}>
          <Button sx={{ variant: "button.default", mr: 2, flexShrink: 0 }}>
            {key}
          </Button>
          <Input
            readOnly
            sx={{ variant: "input.default", mr: 2 }}
            value={props.customParamData[key]}
          />
          <IconButton
            children={<UilTrash />}
            sx={{ variant: "iconButton.negative", mr: 2 }}
            title="Remove parameter"
          />
          <IconButton
            children={<UilRefresh />}
            sx={{ variant: "iconButton.default" }}
            title="Refresh"
          />
        </Flex>
      ))}

      <Button
        sx={{ variant: "button.default" }}
        onClick={() =>
          Meteor.call("refs.updateCustomMockData", props._id, "city")
        }
      >
        <UilPlus />
        <Text ml={2}>Add custom parameter</Text>
      </Button>
    </Flex>
  );
};

CustomParams.propTypes = {
  _id: PropTypes.string,
};

export default CustomParams;
