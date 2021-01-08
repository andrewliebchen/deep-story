import { Button, Flex, Input } from "theme-ui";
import { useGetRef } from "../utils/hooks";
import { useHistory } from "react-router-dom";
import {
  Check,
  Eye,
  EyeOff,
  Trash,
  RotateCcw,
  Search as SearchIcon,
  ArrowLeft,
  ArrowRight,
} from "react-feather";
import { isReady } from "../utils/helpers";
import React from "react";
import RefFilter from "./RefFilter";
import Search from "./Search";

const Toolbar = (props) => {
  const history = useHistory();

  return (
    <Flex
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: 4,
        zIndex: 1,
        bg: "background",
        justifyContent: "space-between",
      }}
    >
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
            window.confirm("Are you sure you want to delete this ref?") &&
            Meteor.call(
              "refs.remove",
              props._id,
              (error, success) => success && history.push("/refs")
            )
          }
          sx={{
            variant: "button.negative",
          }}
          children={<Trash />}
          title="Delete"
        />
        <Button
          onClick={() => history.push(`/refs/${props._id}`)}
          sx={{ variant: "button.primary" }}
          children={<ArrowRight />}
        />
      </Flex>
    </Flex>
  );
};

export default Toolbar;
