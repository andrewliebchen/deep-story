import React from "react";
import { Box, Button, Flex, IconButton, Input, Select, Text } from "theme-ui";
import UilCornerRightDown from "@iconscout/react-unicons/icons/uil-corner-right-down";
import UilRefresh from "@iconscout/react-unicons/icons/uil-refresh";
import PropTypes from "prop-types";

const RefMockEdit = (props) => (
  <Box>
    <Flex sx={{ variant: "flex.ref" }}>
      <Flex m={-2}>
        <Flex sx={{ flexDirection: "column", m: 2, flex: "1 1 0" }}>
          <Text sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
            Type of mock
          </Text>
          <Select sx={{ variant: "select.default" }}>
            <option>Person</option>
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
      <Flex m={-1}>
        <Input disabled value="name" sx={{ variant: "input.default", m: 1 }} />
        <Input
          sx={{ variant: "input.default", m: 1 }}
          value="Marky Mark"
          readOnly
        />
        <IconButton
          children={<UilRefresh />}
          sx={{ variant: "iconButton.default", m: 1 }}
        />
      </Flex>
      <Button variant="button.default" mt={3}>
        <UilCornerRightDown />
        <Text>See all default parameters</Text>
      </Button>
    </Flex>

    {/* TODO: Add custom params */}
  </Box>
);

RefMockEdit.propTypes = {
  _id: PropTypes.string,
  nickname: PropTypes.string,
};

export default RefMockEdit;
