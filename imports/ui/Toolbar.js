import { Button, Flex, Text } from "theme-ui";
import {
  Eye,
  EyeOff,
  Trash,
  RotateCcw,
  ArrowLeft,
  CornerRightDown,
  Slash,
} from "react-feather";
import { useChildRefsCount } from "../utils/hooks";
import { useHistory } from "react-router-dom";
import React from "react";

const Toolbar = (props) => {
  const refCount = useChildRefsCount(props._id);
  const history = useHistory();
  const isLink = props.type === "link";

  return (
    <Flex sx={{ variant: "flex.header" }}>
      <Button
        sx={{ variant: "button.secondary" }}
        children={<ArrowLeft />}
        title="Done"
        onClick={() => history.goBack()}
      />

      <Flex>
        <Button
          sx={{
            variant: "button.secondary",
            mr: 2,
          }}
          children={props.showTitle ? <Eye /> : <EyeOff />}
          onClick={() =>
            Meteor.call("refs.update", props._id, {
              showTitle: !props.showTitle,
            })
          }
          title={props.showTitle ? "Hide ref title" : "Show ref title"}
        />
        {props.type === "mock" && (
          <Button
            sx={{ variant: "button.secondary" }}
            onClick={() =>
              window.confirm(
                "Are you sure you want to update this mock? You might not see this person again..."
              ) &&
              Meteor.call(
                "mocks.refreshData",
                mock._id,
                (error, success) =>
                  success && setToastMessage("Mock data refreshed")
              )
            }
          >
            <RotateCcw />
          </Button>
        )}
      </Flex>
      <Flex sx={{ width: "control", gap: 2, justifyContent: "flex-end" }}>
        <Button
          onClick={() =>
            window.confirm(
              isLink
                ? "Are you sure you want to remove the link to this ref? This will not affect the original ref."
                : "Are you sure you want to delete this ref?"
            ) &&
            Meteor.call(
              "refs.remove",
              props._id,
              (error, success) => success && history.push("/refs")
            )
          }
          sx={{
            variant: "button.negative",
          }}
          children={isLink ? <Slash /> : <Trash />}
          title={isLink ? "Remove link to ref" : "Delete ref"}
        />
        <Button
          onClick={() => history.push(`/refs/${props._id}`)}
          sx={{ variant: "button.primary" }}
        >
          {refCount > 0 && <Text mr={2}>{refCount}</Text>}
          <CornerRightDown />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Toolbar;
