import { Button, Card, Flex, Text, Input } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { RotateCcw, X } from "react-feather";
import { useGetMocks } from "../utils/hooks";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";

const RefMockEdit = (props) => {
  const { setToastMessage } = useContext(AppContext);
  const mocks = useGetMocks({ parentId: props._id });

  return (
    <Card
      sx={{
        flexDirection: "column",
        bg: "muted",
        mx: -4,
        my: 3,
      }}
    >
      {mocks.length > 0 &&
        mocks.map((mock) => (
          <Flex key={mock._id} sx={{ flexDirection: "column" }}>
            {Object.keys(mock.data).map((key) => (
              <Flex key={key} sx={{ mb: 3, alignItems: "center" }}>
                <Input sx={{ mr: 2, width: 144 }} value={key} readOnly />
                <Input sx={{ mr: 2 }} value={mock.data[key]} readOnly />
                <Button
                  children={<X />}
                  disabled={key === "image"}
                  sx={{
                    variant: `button.${
                      props.isParentRef ? "negative" : "backgroundNegative"
                    }`,
                    mr: 2,
                  }}
                  title={
                    key === "name" ? "Names cannot be removed" : "Remove field"
                  }
                  disabled={key === "name"}
                  onClick={() =>
                    Meteor.call(
                      "mocks.removeField",
                      props._id,
                      key,
                      (error, success) =>
                        success &&
                        setToastMessage(`Custom field "${key}" removed`)
                    )
                  }
                />
              </Flex>
            ))}
            <Button
              sx={{
                variant: `button.${
                  props.isParentRef ? "secondary" : "background"
                }`,
              }}
              onClick={() =>
                window.confirm(
                  "Are you sure you want to update this mock? You might not see this person again..."
                ) &&
                Meteor.call(
                  "mocks.refreshData",
                  mock._id,
                  (error, success) =>
                    success && setToastMessage("Mock data refreshed")
                )
              }
            >
              <RotateCcw />
              <Text ml={2}>Refresh mock data</Text>
            </Button>
          </Flex>
        ))}
    </Card>
  );
};

RefMockEdit.propTypes = {
  _id: PropTypes.string,
};

export default RefMockEdit;
