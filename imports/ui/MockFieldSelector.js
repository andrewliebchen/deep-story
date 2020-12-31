import { Button, Input, Flex } from "theme-ui";
import { mockFields } from "../utils/mockGenerators";
import { X } from "react-feather";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";

const MockFieldSelector = (props) => {
  const { setToastMessage } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  return (
    <Flex sx={{ variant: "flex.overlayBackground" }}>
      <Flex
        sx={{
          variant: "flex.ref",
          borderRadius: 5,
          boxShadow: "overlay",
          overflow: "scroll",
          p: 0,
          maxHeight: "ref",
          bg: "background",
        }}
      >
        <Flex
          sx={{
            position: "sticky",
            top: 0,
            bg: "background",
            p: 3,
          }}
        >
          <Input
            type="search"
            placeholder="Search"
            sx={{ variant: "input.default" }}
            defaultValue={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </Flex>
        <Flex
          sx={{
            flexWrap: "wrap",
            justifyContent: "center",
            px: 3,
            pb: 3,
          }}
        >
          {mockFields
            .filter(
              (field) =>
                searchValue.length < 2 ||
                field.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((field) => (
              <Button
                key={field}
                sx={{ variant: "button.secondary", m: 1 }}
                onClick={() =>
                  Meteor.call(
                    "refs.updateMockData",
                    props._id,
                    field,
                    (error, success) => {
                      if (success) {
                        props.setSelectingField(false);
                        setToastMessage(`Custom field "${field}" added`);
                      }
                    }
                  )
                }
              >
                {field}
              </Button>
            ))}
        </Flex>
      </Flex>
      <Button
        sx={{
          variant: "button.secondary",
          position: "absolute",
          top: 3,
          right: 3,
        }}
        children={<X />}
        title="Close"
        onClick={() => props.setSelectingField(false)}
      />
    </Flex>
  );
};

MockFieldSelector.propTypes = {
  _id: PropTypes.string,
  setSelectingField: PropTypes.func,
};

export default MockFieldSelector;
