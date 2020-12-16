import { Flex, IconButton } from "theme-ui";
import { refTypes } from "../utils/types";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import useHover from "@react-hook/hover";

const RefNew = (props) => {
  const { setSelectedRefId } = useContext(AppContext);
  const { parentRefId } = useParams();

  const target = React.useRef(null);
  const isHovering = useHover(target);

  const [isExpanded, setIsExpanded] = useState(props.isExpanded || false);

  console.log(props.rank);

  const insert = (type) =>
    Meteor.call(
      "refs.insert",
      {
        type: type,
        parentId: parentRefId,
        rank: props.rank,
      },
      (error, id) => setSelectedRefId(id)
    );

  return (
    <Flex
      title="Add a new ref here..."
      sx={{
        variant: "flex.refWrapper",
        p: isExpanded && 3,
        bg: isExpanded && "primaryMuted",
        height: isExpanded ? "auto" : 8,
        cursor: "pointer",
        postion: "relative",
        "&:hover": { bg: isExpanded || "muted" },
      }}
      ref={target}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded &&
        refTypes.map((type) => (
          <IconButton
            key={type.stub}
            onClick={() => insert(type.stub)}
            sx={{ variant: "iconButton.background", mr: 2 }}
            children={type.icon}
            disabled={!type.active}
            title={`Create a ${type.stub} ref`}
          />
        ))}
      {isExpanded && (
        <IconButton
          sx={{
            variant: "iconButton.background",
            position: "absolute",
            right: 3,
          }}
          children={<UilTimes />}
          title="Nevermind"
        />
      )}
    </Flex>
  );
};

RefNew.propTypes = {
  rank: PropTypes.number.isRequired,
  isExpanded: PropTypes.bool,
};

export default RefNew;
