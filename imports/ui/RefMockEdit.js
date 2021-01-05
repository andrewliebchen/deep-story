import { Box, Button, Card, Flex, Select, Text, Input } from "theme-ui";
import { Meteor } from "meteor/meteor";
import AppContext from "./AppContext";
import capitalize from "capitalize";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { isReady } from "../utils/helpers";
import { RefreshCcw as Refresh, Plus, X } from "react-feather";

const RefMockEdit = (props) => {
  const { setToastMessage } = useContext(AppContext);

  return (
    <Card
      sx={{
        flexDirection: "column",
        bg: "muted",
        mx: -4,
        my: 3,
      }}
    >
      {isReady(props.data) &&
        Object.keys(props.data).map((data) => (
          <Flex key={data} sx={{ mb: 3, alignItems: "center" }}>
            <Input sx={{ mr: 2, width: 144 }} value={data} readOnly />
            <Input sx={{ mr: 2 }} value={props.data[data]} readOnly />
            <Button
              children={<X />}
              disabled={data === "image"}
              sx={{
                variant: `button.${
                  props.isParentRef ? "negative" : "backgroundNegative"
                }`,
                mr: 2,
              }}
              title="Remove field"
              onClick={() =>
                Meteor.call(
                  "refs.removeMockData",
                  props._id,
                  data,
                  (error, success) =>
                    success && setToastMessage(`Custom field "${data}" removed`)
                )
              }
            />
            <Button
              children={<Refresh />}
              sx={{
                variant: `button.${
                  props.isParentRef ? "secondary" : "background"
                }`,
              }}
              title="Refresh"
              onClick={() =>
                Meteor.call(
                  "refs.updateMockData",
                  props._id,
                  data,
                  "customFieldData",
                  (error, id) => setToastMessage("Mock data field refreshed")
                )
              }
            />
          </Flex>
        ))}

      <Button
        sx={{
          variant: `button.${props.isParentRef ? "secondary" : "background"}`,
        }}
        onClick={() => setSelectingField(true)}
      >
        <Plus />
        <Text ml={2}>Add mock data</Text>
      </Button>
    </Card>
  );
};

RefMockEdit.propTypes = {
  _id: PropTypes.string,
  data: PropTypes.object,
  nickname: PropTypes.string,
};

export default RefMockEdit;
