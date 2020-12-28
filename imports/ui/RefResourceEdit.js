import React, { useState, useContext } from "react";
import { Box, Flex, Text, Input, Label, Button } from "theme-ui";
import AppContext from "./AppContext";
import TitleInput from "./TitleInput";

const RefResourceEdit = (props) => {
  const { setToastMessage } = useContext(AppContext);
  const [value, setValue] = useState(props.resourceUrl);

  return (
    <Box>
      <TitleInput {...props} />
      <Flex
        sx={{
          variant: "flex.ref",
          alignItems: "center",
          flexDirection: "rows",
          mt: 2,
        }}
      >
        <Label>Resource URL</Label>
        <Input
          autoFocus
          type="text"
          sx={{ variant: "input.default", mr: 2 }}
          defaultValue={value}
          placeholder="https://www.example.com"
          onChange={(event) => setValue(event.target.value)}
        />
        <Button
          sx={{ variant: "button.default" }}
          onClick={() =>
            Meteor.call(
              "refs.updateResourceUrl",
              props._id,
              value,
              (error, success) => {
                success && setToastMessage("Resource preview updated");
                error && alert(error);
              }
            )
          }
        >
          Update
        </Button>
      </Flex>
    </Box>
  );
};

export default RefResourceEdit;
