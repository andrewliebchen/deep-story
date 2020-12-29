import { Box, Flex, IconButton, Input, Label, Select } from "theme-ui";
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
      <TitleEdit {...props} />

      <Flex sx={{ variant: "flex.ref", p: 0, mt: 2 }}>
        <Box>
          <Flex sx={{ alignItems: "center", m: 3 }}>
            <Label>Type</Label>
            <Select
              sx={{ variant: "select.default" }}
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
                  readOnly
                  sx={{ variant: "input.default", mr: 2 }}
                  value={props.data[key]}
                />
                <IconButton
                  children={<UilRefresh />}
                  sx={{ variant: "button.secondary" }}
                  title="Refresh"
                  onClick={() =>
                    Meteor.call(
                      "refs.refreshMockData",
                      props._id,
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
