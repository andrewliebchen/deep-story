import { Card, Text, Input, Label, Button } from "theme-ui";
import AppContext from "./AppContext";
import React, { useState, useContext } from "react";
import { RotateCcw } from "react-feather";
import { useGetResource } from "../utils/hooks";
import { isReady } from "../utils/helpers";

const RefResourceEdit = (props) => {
  const { setToastMessage } = useContext(AppContext);
  const resource = useGetResource({ parentId: props._id });
  const [value, setValue] = useState(resource.url);

  return (
    <Card
      sx={{
        bg: "muted",
        mx: -4,
        my: 3,
      }}
    >
      <Label>Resource URL</Label>
      <Input
        autoFocus
        type="url"
        sx={{ variant: "input.default", mb: 3 }}
        value={value}
        placeholder="https://www.example.com"
        onChange={(event) => setValue(event.target.value)}
      />
      <Button
        sx={{
          variant: "button.primary",
          px: 3,
        }}
        onClick={() =>
          Meteor.call(
            "resources.update",
            resource._id,
            value,
            (error, success) => {
              success && setToastMessage("Resource preview updated");
              error && alert(error);
            }
          )
        }
      >
        <RotateCcw />
        <Text ml={2}>Update</Text>
      </Button>
    </Card>
  );
};

export default RefResourceEdit;
