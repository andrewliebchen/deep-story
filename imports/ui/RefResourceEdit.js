import React, { useState } from "react";
import { Box, Flex, Text, Input, Label, Button } from "theme-ui";

const RefResourceEdit = (props) => {
  const [value, setValue] = useState(props.resourceUrl);
  return (
    <Box>
      <Flex
        sx={{
          variant: "flex.ref",
          alignItems: "center",
          flexDirection: "rows",
        }}
      >
        <Label>Resource URL</Label>
        <Input
          type="url"
          sx={{ variant: "input.default", mr: 2 }}
          defaultValue={value}
          placeholder="https://www.example.com"
          onChange={(event) => setValue(event.target.value)}
        />
        <Button
          sx={{ variant: "button.default" }}
          onClick={() =>
            Meteor.call("refs.updateResourceUrl", props._id, value)
          }
        >
          Update
        </Button>
      </Flex>
    </Box>
  );
};

export default RefResourceEdit;
