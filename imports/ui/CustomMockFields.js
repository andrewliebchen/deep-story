import { Button, Card, Input, Flex, Text } from "theme-ui";
import { isReady } from "../utils/helpers";
import { mockFields } from "../utils/mockGenerators";
import { Plus, X, RefreshCcw as Refresh } from "react-feather";
import AppContext from "./AppContext";
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
      {isReady(props.data) &&
        Object.keys(props.data).map((data) => (
          <Flex key={data} sx={{ mb: 3, alignItems: "center" }}>
            <Button sx={{ variant: "button.secondary", mr: 2, flexShrink: 0 }}>
              {data}
            </Button>
            <Text sx={{ variant: "text.edit", mr: 2 }}>{props.data[data]}</Text>
            <Button
              children={<X />}
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
                  "refs.refreshMockData",
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
              {mockFields
                .filter(
                  (field) =>
                    searchValue.length < 2 ||
                    field.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((field) => (
                  <Button
                    key={key}
                    sx={{ variant: "button.secondary", m: 1 }}
                    onClick={() =>
                      Meteor.call(
                        "refs.updateCustomMockData",
                        props._id,
                        field,
                        (error, success) => {
                          if (success) {
                            setSelectingField(false);
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
