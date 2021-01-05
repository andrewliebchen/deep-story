import React, { useContext } from "react";
import { Button, Flex, Input } from "theme-ui";
import AppContext from "./AppContext";
import { useGetRef } from "../utils/hooks";
import { Eye, EyeOff, Trash, Check, Search as SearchIcon } from "react-feather";
import { isReady } from "../utils/helpers";
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
            title={selectedRef.showTitle ? "Hide ref title" : "Show ref title"}
          />
          <Button
            onClick={() =>
              window.confirm("Are you sure you want to delete this ref?") &&
              Meteor.call("refs.remove", selectedRef._id)
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
