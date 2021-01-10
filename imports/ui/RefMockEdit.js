import { Button, Flex, Input } from "theme-ui";
import { isReady } from "../utils/helpers";
import { Meteor } from "meteor/meteor";
import { X } from "react-feather";
import { useGetMock } from "../utils/hooks";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";

const RefMockEdit = (props) => {
  const { setToastMessage } = useContext(AppContext);
  const mock = useGetMock({ parentId: props._id });

  return (
    isReady(mock) && (
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
                    success && setToastMessage(`Custom field "${key}" removed`)
                )
              }
            />
          </Flex>
        ))}
      </Flex>
    )
  );
};

RefMockEdit.propTypes = {
  _id: PropTypes.string,
};

export default RefMockEdit;
