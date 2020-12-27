import { Flex, Text, Button, Input, IconButton } from "theme-ui";
import { isReady } from "../utils/helpers";
import fakerKeys from "../utils/fakerKeys";
import PropTypes from "prop-types";
import React, { useState } from "react";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import UilRefresh from "@iconscout/react-unicons/icons/uil-refresh";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";

const CustomMockFields = (props) => {
  const [selectingField, setSelectingField] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <Flex sx={{ variant: "flex.ref", mt: 2, flexDirection: "column" }}>
      {isReady(props.customFieldData) &&
        Object.keys(props.customFieldData).map((key) => (
          <Flex key={key} sx={{ mb: 3 }}>
            <Button sx={{ variant: "button.default", mr: 2, flexShrink: 0 }}>
              {key}
            </Button>
            <Input
              readOnly
              sx={{ variant: "input.default", mr: 2 }}
              value={props.customFieldData[key]}
            />
            <IconButton
              children={<UilTrash />}
              sx={{ variant: "iconButton.negative", mr: 2 }}
              title="Remove field"
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
        onClick={() => setSelectingField(true)}
      >
        <UilPlus />
        <Text ml={2}>Add custom field</Text>
      </Button>

      {selectingField && (
        <Flex sx={{ variant: "flex.overlayBackground" }}>
          <Flex
            sx={{
              variant: "flex.ref",
              borderRadius: 5,
              boxShadow: "overlay",
              overflow: "scroll",
              p: 0,
              maxHeight: "ref",
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
              {Object.keys(fakerKeys)
                .filter(
                  (key) =>
                    searchValue.length < 2 ||
                    fakerKeys[key]
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                )
                .map((key) => (
                  <Button
                    key={key}
                    sx={{ variant: "button.default", m: 1 }}
                    onClick={() =>
                      Meteor.call(
                        "refs.updateCustomMockData",
                        props._id,
                        key,
                        (error, success) => success && setSelectingField(false)
                      )
                    }
                  >
                    {fakerKeys[key]}
                  </Button>
                ))}
            </Flex>
          </Flex>
          <IconButton
            sx={{
              variant: "iconButton.default",
              position: "absolute",
              top: 3,
              right: 3,
            }}
            children={<UilTimes />}
            title="Close"
            onClick={() => setSelectingField(false)}
          />
        </Flex>
      )}
    </Flex>
  );
};

CustomMockFields.propTypes = {
  _id: PropTypes.string,
};

export default CustomMockFields;
