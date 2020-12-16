import { Flex, IconButton } from "theme-ui";
import { refTypes } from "../utils/types";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";

const RefNewTypeSelector = (props) => {
  const { setSelectedRefId } = useContext(AppContext);
  const { parentRefId } = useParams();
  const insert = (type) =>
    Meteor.call(
      "refs.insert",
      {
        type: type,
        parentId: parentRefId,
        rank: props.rank,
      },
      (error, id) => {
        setSelectedRefId(id);
        props.setIsSelectingType(false);
      }
    );

  return (
    <Flex
      sx={{
        variant: "flex.refWrapper",
        bg: "primaryMuted",
        px: 3,
        py: 4,
        justifyContent: "center",
        width: "100vw",
      }}
    >
      {refTypes.map((type) => (
        <IconButton
          key={type.stub}
          onClick={() => insert(type.stub)}
          sx={{ variant: "iconButton.white", mr: 2 }}
          children={type.icon}
          disabled={!type.active}
          title={`Create a ${type.stub} ref`}
        />
      ))}
    </Flex>
  );
};

RefNewTypeSelector.propTypes = {
  rank: PropTypes.number,
};

export default RefNewTypeSelector;
