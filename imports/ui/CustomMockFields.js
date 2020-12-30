import { Flex, Text, Button, Card } from "theme-ui";
import { isReady } from "../utils/helpers";
import { UilPlus, UilRefresh, UilTimes } from "@iconscout/react-unicons";
import AppContext from "./AppContext";
import fakerKeys from "../utils/fakerKeys";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";

const CustomMockFields = (props) => {
  const { setToastMessage } = useContext(AppContext);
  const [selectingField, setSelectingField] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <Card
      sx={{ flexDirection: "column", bg: props.isParentRef && "background" }}
    >
      {isReady(props.customFieldData) &&
        Object.keys(props.customFieldData).map((key) => (
          <Flex key={key} sx={{ mb: 3, alignItems: "center" }}>
            <Button sx={{ variant: "button.secondary", mr: 2, flexShrink: 0 }}>
              {key}
            </Button>
            <Text sx={{ variant: "text.edit", mr: 2 }}>
              {props.customFieldData[key]}
            </Text>
            <Button
              children={<UilTimes />}
              sx={{
                variant: `button.${
                  props.isParentRef ? "negative" : "backgroundNegative"
                }`,
                mr: 2,
              }}
              title="Remove field"
              onClick={() =>
                Meteor.call(
                  "refs.removeMockField",
                  props._id,
                  key,
                  (error, success) =>
                    success && setToastMessage(`Custom field "${key}" removed`)
                )
              }
            />
            <Button
              children={<UilRefresh />}
              sx={{
                variant: `button.${
                  props.isParentRef ? "secondary" : "background"
                }`,
              }}
              title="Refresh"
              onClick={() =>
                Meteor.call(
                  "refs.refreshMockData",
                  props._id,
                  key,
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
                    sx={{ variant: "button.secondary", m: 1 }}
                    onClick={() =>
                      Meteor.call(
                        "refs.updateCustomMockData",
                        props._id,
                        key,
                        (error, success) => {
                          if (success) {
                            setSelectingField(false);
                            setToastMessage(`Custom field "${key}" added`);
                          }
                        }
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
              variant: "button.secondary",
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
    </Card>
  );
};

CustomMockFields.propTypes = {
  _id: PropTypes.string,
};

export default CustomMockFields;
