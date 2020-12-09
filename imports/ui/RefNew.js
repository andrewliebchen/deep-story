import { Flex, IconButton } from "theme-ui";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";

const RefNew = (props) => {
  const { parentRefId } = useParams();

  return (
    <Flex>
      <IconButton
        onClick={() =>
          Meteor.call("refs.insert", {
            type: "text",
            parentId: parentRefId,
            rank: props.rank,
          })
        }
        sx={{ variant: "iconButton.default" }}
        children={<UilPlus />}
      />
    </Flex>
  );
};

RefNew.propTypes = {
  rank: PropTypes.number,
};

export default RefNew;
