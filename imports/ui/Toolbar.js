import React, { useContext } from "react";
import { Button, Flex } from "theme-ui";
import AppContext from "./AppContext";
import { useGetRef } from "../utils/hooks";
import { Eye, EyeOff, Trash, Check } from "react-feather";
import { isReady } from "../utils/helpers";

const Toolbar = (props) => {
  const { selectedRefId, setSelectedRefId } = useContext(AppContext);
  const selectedRef = useGetRef(selectedRefId);

  return (
    isReady(selectedRef) && (
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
          sx={{ variant: "button.primary", ml: 2 }}
          children={<Check />}
          title="Done"
        />
      </Flex>
    )
  );
};

export default Toolbar;
