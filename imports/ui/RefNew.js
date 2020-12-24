import { Flex, IconButton } from "theme-ui";
import { refTypes } from "../utils/types";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import Search from "./Search";
import UilSearchPlus from "@iconscout/react-unicons/icons/uil-search-plus";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import useHover from "@react-hook/hover";
import { Meteor } from "meteor/meteor";

const RefNew = (props) => {
  const { setSelectedRefId } = useContext(AppContext);
  const { parentRefId } = useParams();

  const target = React.useRef(null);
  const isHovering = useHover(target);

  const [isExpanded, setIsExpanded] = useState(props.isExpanded);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <Flex
      title="Add a new ref here..."
      sx={{
        variant: "flex.refWrapper",
        bg: isExpanded && "primaryMuted",
        borderColor: "background",
        cursor: isExpanded ? "default" : "pointer",
        height: isExpanded ? "auto" : 8,
        p: isExpanded && 3,
        postion: "relative",
        zIndex: 1,
        "&:hover": { bg: isExpanded || "muted" },
      }}
      ref={target}
      onClick={() => setIsExpanded(true)}
    >
      {isExpanded && !isSearching && (
        <Flex>
          {Object.keys(refTypes).map((stub) => {
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
          <IconButton
            children={<UilSearchPlus />}
            onClick={() => setIsSearching(true)}
            sx={{ variant: "iconButton.background", ml: 3 }}
            title="Add an existing ref"
          />
        </Flex>
      )}
      {isSearching && (
        <Search
          autoFocus
          navigate={false}
          onClick={(linkTargetRefId) =>
            Meteor.call("refs.insertLink", {
              parentId: parentRefId,
              linkId: linkTargetRefId,
              rank: props.rank,
            })
          }
        />
      )}
      {isExpanded && !props.isExpanded && (
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            isSearching ? setIsSearching(false) : setIsExpanded(false);
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
