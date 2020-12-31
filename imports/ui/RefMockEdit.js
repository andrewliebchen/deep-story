import { Box, Button, Card, Flex, Select, Text } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { mockGenerators } from "../utils/mockGenerators";
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
        {/* <Flex sx={{ alignItems: "center" }}>
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
            {Object.keys(mockGenerators).map((generator) => (
              <option key={generator} value={generator}>
                {generator}
              </option>
            ))}
          </Select>
        </Flex>*/}
        <CustomMockFields {...props} />
      </Card>
    </Box>
  );
};

RefMockEdit.propTypes = {
  _id: PropTypes.string,
  data: PropTypes.object,
  nickname: PropTypes.string,
};

export default RefMockEdit;
