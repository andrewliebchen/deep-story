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
  const { selectedRefId, setSelectedRefId, setShowGlobalSearch } = useContext(
    AppContext
  );
  const selectedRef = useGetRef(selectedRefId);

  return (
    <>
      {isReady(selectedRef) ? (
        <Flex>
          <Flex mr={3}>
            <Button
              sx={{
                variant: "button.secondary",
                mr: 2,
              }}
              children={selectedRef.showTitle ? <Eye /> : <EyeOff />}
              onClick={() =>
                Meteor.call("refs.update", selectedRef._id, {
                  showTitle: !selectedRef.showTitle,
                })
              }
              title={
                selectedRef.showTitle ? "Hide ref title" : "Show ref title"
              }
            />
            {selectedRef.type === "mock" && (
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
          <Button
            onClick={() =>
              window.confirm("Are you sure you want to delete this ref?") &&
              Meteor.call(
                "refs.remove",
                selectedRef._id,
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
      ) : (
        <Flex
          sx={{
            bg: "muted",
            width: "ref",
            height: "control",
            borderRadius: 3,
            cursor: "pointer",
            color: "textSecondary",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setShowGlobalSearch(true)}
        >
          <SearchIcon />
        </Flex>
      )}
    </>
  );
};

export default Toolbar;
