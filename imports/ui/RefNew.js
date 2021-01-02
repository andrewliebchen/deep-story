import { Flex, Button, Heading } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { refTypes } from "../utils/types";
import { useAccount } from "../utils/hooks";
import { useKeycodes } from "@accessible/use-keycode";
import { useParams } from "react-router-dom";
import { X, Search as SearchIcon } from "react-feather";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import Search from "./Search";
import useHover from "@react-hook/hover";

const RefNew = (props) => {
  // TODO: Maybe the parentId comes from props...since it could be the userId or the parentRefIdk
  const { setSelectedRefId } = useContext(AppContext);
  const { parentRefId } = useParams();
  const { userId } = useAccount();

  const target = React.useRef(null);
  const isHovering = useHover(target);

  const [isExpanded, setIsExpanded] = useState(props.isExpanded);
  const [isSearching, setIsSearching] = useState(false);

  // Listen for keycodesListener
  const keycodesListener = useKeycodes({
    // esc
    27: () => setIsExpanded(false),
  });

  return (
    <Flex
      sx={{
        variant: "flex.wrapper",
        bg: isExpanded && "primaryMuted",
        borderColor: "background",
        cursor: isExpanded ? "default" : "pointer",
        minHeight: 16,
        p: isExpanded && 4,
        my: 2,
        postion: "relative",
        zIndex: 1,
        flexDirection: "column",
        "&:hover": { bg: isExpanded || "muted" },
      }}
      ref={target}
      onClick={() => setIsExpanded(true)}
    >
      {isExpanded && (
        <Heading sx={{ mb: 3, fontWeight: "bold" }}>Create a new a Ref</Heading>
      )}
      {isExpanded && !isSearching && (
        <Flex ref={keycodesListener}>
          {Object.keys(refTypes).map((stub) => {
            const type = refTypes[stub];
            return (
              <Button
                children={type.icon}
                disabled={!type.active}
                key={stub}
                onClick={() =>
                  Meteor.call(
                    "refs.insert",
                    {
                      type: stub,
                      parentId: parentRefId || userId,
                      rank: props.rank,
                    },
                    (error, id) => {
                      setIsExpanded(false);
                      setSelectedRefId(id);
                    }
                  )
                }
                sx={{ variant: "button.background", mr: 2 }}
                title={`Create a ${stub} ref`}
              />
            );
          })}
          <Button
            children={<SearchIcon />}
            onClick={() => setIsSearching(true)}
            sx={{ variant: "button.background", ml: 3 }}
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
            variant: "button.background",
            position: "absolute",
            right: 3,
          }}
          children={<X />}
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
