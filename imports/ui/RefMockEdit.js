import React from "react";
import { Box, Button, Flex, IconButton, Input, Select, Text } from "theme-ui";
import UilCornerRightDown from "@iconscout/react-unicons/icons/uil-corner-right-down";
import UilRefresh from "@iconscout/react-unicons/icons/uil-refresh";
import PropTypes from "prop-types";
import { mockTypes } from "../utils/types";
import { Meteor } from "meteor/meteor";

const RefMockEdit = (props) => (
  <Box>
    <Flex sx={{ variant: "flex.ref" }}>
      <Flex m={-2}>
        <Flex sx={{ flexDirection: "column", m: 2, flex: "1 1 0" }}>
          <Text sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
            Type of mock
          </Text>
          <Select
            sx={{ variant: "select.default" }}
            value={props.schema && props.schema.label}
            onChange={(event) =>
              Meteor.call(
                "refs.changeSchemaType",
                props._id,
                event.target.value
              )
            }
          >
            {Object.keys(mockTypes).map((key) => (
              <option key={key} value={key}>
                {mockTypes[key].label}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex sx={{ flexDirection: "column", m: 2, flex: "1 1 0" }}>
          <Text sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
            Nickname
          </Text>
          <Input
            placeholder="Make it unique..."
            sx={{ variant: "input.default" }}
            value={props.nickname}
            onChange={(event) =>
              Meteor.call("refs.update", props._id, {
                nickname: event.target.value,
              })
            }
          />
        </Flex>
      </Flex>
    </Flex>

    <Flex sx={{ variant: "flex.ref", mt: 2 }}>
      <Box m={-1}>
        {Object.keys(props.data).map((key) => (
          <Flex m={1} key={key}>
            <Input
              disabled
              value={key}
              sx={{ variant: "input.default", m: 1 }}
            />
            <Input
              sx={{ variant: "input.default", m: 1 }}
              value={props.data[key]}
              readOnly
            />
            <IconButton
              children={<UilRefresh />}
              sx={{ variant: "iconButton.default", m: 1 }}
            />
          </Flex>
        ))}
      </Box>
    </Flex>

    {/* TODO: Add custom params */}
  </Box>
);

RefMockEdit.propTypes = {
  _id: PropTypes.string,
  nickname: PropTypes.string,
  data: PropTypes.object,
};

export default RefMockEdit;
