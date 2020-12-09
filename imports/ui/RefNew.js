import React from "react";
import { Flex, IconButton } from "theme-ui";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import { useParams } from "react-router-dom";

const RefNew = () => {
  const { parentRefId } = useParams();

  return (
    <Flex>
      <IconButton
        onClick={() =>
          Meteor.call("refs.insert", {
            type: "text",
            parentId: parentRefId,
          })
        }
        sx={{ variant: "iconButton.default" }}
        children={<UilPlus />}
      />
    </Flex>
  );
};

export default RefNew;
