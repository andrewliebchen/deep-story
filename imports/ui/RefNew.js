import { Flex, Button, Heading } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { refTypes } from "../utils/types";
import { X, Search as SearchIcon } from "react-feather";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import Search from "./Search";
import useHover from "@react-hook/hover";

const RefNew = (props) => {
  const { setSelectedRefId } = useContext(AppContext);

  const target = React.useRef(null);
  const isHovering = useHover(target);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

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
      onClick={() => setIsExpanded(true)}
      ref={target}
    >
      {isExpanded && (
        <Heading sx={{ mb: 3, fontWeight: "bold" }}>Create a new a Ref</Heading>
      )}
      {isExpanded && !isSearching && (
        <Flex>
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
                      parentId: props.parentId,
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
      {isExpanded && (
        <Button
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
  rank: 0,
};

RefNew.propTypes = {
  rank: PropTypes.number.isRequired,
  parentId: PropTypes.string.isRequired,
};

export default RefNew;
