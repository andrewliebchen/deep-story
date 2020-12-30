import {
  Box,
  Button,
  Card,
  Flex,
  IconButton,
  Input,
  Label,
  Select,
  Text,
} from "theme-ui";
import { Meteor } from "meteor/meteor";
import { mockTypes } from "../utils/types";
import AppContext from "./AppContext";
import capitalize from "capitalize";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import TitleEdit from "./TitleEdit";
import UilRefresh from "@iconscout/react-unicons/icons/uil-refresh";
import CustomMockFields from "./CustomMockFields";

const RefMockEdit = (props) => {
  const { setToastMessage } = useContext(AppContext);

  return (
    <Box>
      <Card
        sx={{ flexDirection: "column", bg: props.isParentRef && "background" }}
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
              <Text sx={{ variant: "text.label", pr: 2 }}>
                {capitalize(key)}
              </Text>
              <Text sx={{ variant: "text.edit", pr: 2 }}>
                {props.data[key]}
              </Text>
              <Button
                children={<UilRefresh />}
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
