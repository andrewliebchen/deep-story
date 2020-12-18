import {
  Box,
  Button,
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
import TitleInput from "./TitleInput";
import UilRefresh from "@iconscout/react-unicons/icons/uil-refresh";

const RefMockEdit = (props) => {
  const { setToastMessage } = useContext(AppContext);

  return (
    <Box>
      <TitleInput {...props} />

      <Flex sx={{ variant: "flex.ref", p: 0, mt: 2 }}>
        <Box>
          <Flex sx={{ alignItems: "center", m: 3 }}>
            <Label>Type</Label>
            <Select
              sx={{
                variant: "select.default",
              }}
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
              <Flex key={key} sx={{ alignItems: "center", m: 3 }}>
                <Label>{capitalize(key)}</Label>
                <Input
                  sx={{ variant: "input.default", mr: 2 }}
                  value={props.data[key]}
                  readOnly
                />
                <IconButton
                  children={<UilRefresh />}
                  sx={{ variant: "iconButton.default" }}
                  title="Refresh"
                  onClick={() =>
                    Meteor.call(
                      "refs.refreshMockData",
                      props._id,
                      props.schema,
                      key,
                      (error, id) =>
                        setToastMessage("Mock data field refreshed")
                    )
                  }
                />
              </Flex>
            ))}
        </Box>
      </Flex>

      {/* TODO: Add custom params */}
    </Box>
  );
};

RefMockEdit.propTypes = {
  _id: PropTypes.string,
  nickname: PropTypes.string,
  data: PropTypes.object,
};

export default RefMockEdit;
