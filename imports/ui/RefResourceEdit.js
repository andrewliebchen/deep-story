import { Text, Input, Label, Button, Flex } from "theme-ui";
import { isReady } from "../utils/helpers";
import { RotateCcw } from "react-feather";
import { useGetResource } from "../utils/hooks";
import AppContext from "./AppContext";
import React, { useContext } from "react";

const RefResourceEdit = (props) => {
  const { setToastMessage } = useContext(AppContext);

  const resource = useGetResource({ parentId: props._id });

  return (
    isReady(resource) && (
      <Flex sx={{ flexDirection: "column" }}>
        <Label>Resource URL</Label>
        <Input
          autoFocus
          type="url"
          sx={{ variant: "input.default", mb: 3 }}
          defaultValue={resource.url}
          placeholder="https://www.example.com"
          onChange={(event) =>
            Meteor.call("resources.updateUrl", resource._id, event.target.value)
          }
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
              resource.url,
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
      </Flex>
    )
  );
};

export default RefResourceEdit;
