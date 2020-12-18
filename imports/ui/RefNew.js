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

  const [isExpanded, setIsExpanded] = useState(props.isExpanded);

  return (
    <Flex
      title="Add a new ref here..."
      sx={{
        variant: "flex.refWrapper",
        bg: isExpanded && "primaryMuted",
        cursor: isExpanded ? "default" : "pointer",
        height: isExpanded ? "auto" : 8,
        p: isExpanded && 3,
        postion: "relative",
        borderColor: "background",
        "&:hover": { bg: isExpanded || "muted" },
      }}
      ref={target}
      onClick={() => setIsExpanded(true)}
    >
      {isExpanded &&
        Object.keys(refTypes).map((stub) => {
          const type = refTypes[stub];
          return (
            <IconButton
              children={type.icon}
              disabled={!type.active}
              key={stub}
              onClick={() =>
                Meteor.call(
                  "refs.insert",
                  {
                    type: stub,
                    parentId: parentRefId,
                    rank: props.rank,
                  },
                  (error, id) => {
                    setIsExpanded(false);
                    setSelectedRefId(id);
                  }
                )
              }
              sx={{ variant: "iconButton.background", mr: 2 }}
              title={`Create a ${stub} ref`}
            />
          );
        })}
      {isExpanded && !props.isExpanded && (
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            setIsExpanded(false);
          }}
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

RefNew.defaultProps = {
  isExpanded: false,
};

RefNew.propTypes = {
  isExpanded: PropTypes.bool,
  rank: PropTypes.number.isRequired,
};

export default RefNew;
