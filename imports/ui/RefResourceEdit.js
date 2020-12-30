import { Box, Card, Flex, Text, Input, Label, Button } from "theme-ui";
import AppContext from "./AppContext";
import React, { useState, useContext } from "react";

const RefResourceEdit = (props) => {
  const { setToastMessage } = useContext(AppContext);
  const [value, setValue] = useState(props.resourceUrl);

  return (
    <Card
      sx={{ flexDirection: "column", bg: props.isParentRef && "background" }}
    >
      <Label>Resource URL</Label>
      <Flex>
        <Input
          autoFocus
          type="text"
          sx={{ variant: "input.default", mr: 2 }}
          defaultValue={value}
          placeholder="https://www.example.com"
          onChange={(event) => setValue(event.target.value)}
        />
        <Button
          sx={{
            variant: `button.${props.isParentRef ? "secondary" : "background"}`,
          }}
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
    </Card>
  );
};

export default RefResourceEdit;
