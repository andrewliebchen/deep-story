import { Button, Flex, Input } from "theme-ui";
import { useGetRef } from "../utils/hooks";
import {
  Check,
  Eye,
  EyeOff,
  Trash,
  RotateCcw,
  Search as SearchIcon,
} from "react-feather";
import { isReady } from "../utils/helpers";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import RefFilter from "./RefFilter";
import Search from "./Search";

const Toolbar = (props) => {
  const { setSelectedRefId } = useContext(AppContext);

  return (
    <Flex
      sx={{
        bg: "background",
        boxShadow: "overlay",
        justifyContent: "space-between",
        p: 2,
        borderRadius: 20,
        flexGrow: 2,
        position: "sticky",
        top: 88,
        width: "ref",
        zIndex: 3,
      }}
    >
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
      <Flex>
        <Button
          onClick={() =>
            window.confirm("Are you sure you want to delete this ref?") &&
            Meteor.call(
              "refs.remove",
              props._id,
              (error, success) => success && setSelectedRefId("")
            )
          }
          sx={{
            variant: "button.negative",
          }}
          children={<Trash />}
          title="Delete"
        />
        <Button
          onClick={() => setSelectedRefId(false)}
          sx={{ variant: "button.positive", ml: 2 }}
          children={<Check />}
          title="Done"
        />
      </Flex>
    </Flex>
  );
};

export default Toolbar;
