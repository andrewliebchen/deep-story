import { Box, Button, Card, Flex, Select, Text } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { mockTypes } from "../utils/types";
import { RefreshCcw as Refresh } from "react-feather";
import AppContext from "./AppContext";
import capitalize from "capitalize";
import CustomMockFields from "./CustomMockFields";
import PropTypes from "prop-types";
import React, { useContext } from "react";

const RefMockEdit = (props) => {
  const { setToastMessage } = useContext(AppContext);

  return (
    <Box>
      <Card
        sx={{
          flexDirection: "column",
          bg: props.isParentRef && "background",
          mb: 3,
        }}
      >
        <Flex sx={{ alignItems: "center" }}>
          <Text sx={{ variant: "text.label", pr: 2 }}>Type</Text>
          <Select
            sx={{ variant: "select.default", ml: "auto" }}
            defaultValue={props.schema && props.schema.label}
            onChange={(event) =>
              Meteor.call(
                "refs.updateSchemaType",
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
        {props.data &&
          Object.keys(props.data).map((key) => (
            <Flex key={key} sx={{ alignItems: "center", mt: 3 }}>
              <Text sx={{ variant: "text.label", mr: 2 }}>
                {capitalize(key)}
              </Text>
              <Text
                sx={{
                  variant: "text.edit",
                  mr: 2,
                }}
              >
                {props.data[key]}
              </Text>
              <Button
                children={<Refresh />}
                sx={{
                  variant: `button.${
                    props.isParentRef ? "secondary" : "background"
                  }`,
                  ml: "auto",
                }}
                title="Refresh"
                onClick={() =>
                  Meteor.call(
                    "refs.refreshMockData",
                    props._id,
                    key,
                    (error, id) => setToastMessage("Mock data field refreshed")
                  )
                }
              />
            </Flex>
          ))}
      </Card>
      <CustomMockFields {...props} />
    </Box>
  );
};

RefMockEdit.propTypes = {
  _id: PropTypes.string,
  data: PropTypes.object,
  nickname: PropTypes.string,
};

export default RefMockEdit;
