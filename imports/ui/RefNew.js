import { Flex, Button } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { refTypes } from "../utils/types";
import { useHistory } from "react-router-dom";
import { Link } from "react-feather";
import PropTypes from "prop-types";
import React, { useState, useRef } from "react";
import Search from "./Search";
import useHover from "@react-hook/hover";

const RefNew = (props) => {
  const history = useHistory();

  const target = useRef(null);
  const isHovering = useHover(target);

  const [isExpanded, setIsExpanded] = useState(props.shouldBeExpanded);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <Flex
      sx={{
        bg: isExpanded && "primaryMuted",
        borderRadius: 4,
        cursor: isExpanded ? "default" : "pointer",
        justifyContent: "center",
        minHeight: 16,
        mx: "auto",
        my: isExpanded && 3,
        p: isExpanded && 4,
        width: "ref",
        "&:hover": { bg: isExpanded || "muted" },
      }}
      onClick={() => setIsExpanded(true)}
      ref={target}
    >
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
                    type.method,
                    {
                      type: stub,
                      parentId: props.parentId,
                      rank: props.rank,
                    },
                    (error, response) =>
                      history.push(`/refs/${response.parentRefId}/edit`)
                  )
                }
                sx={{ variant: "button.background", mr: 2 }}
                title={`Create a ${stub} ref`}
              />
            );
          })}
          <Button
            children={<Link />}
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
          selectRef={(linkTargetRefId) =>
            Meteor.call("refs.insertLink", {
              parentId: props.parentId,
              linkId: linkTargetRefId,
              rank: props.rank,
            })
          }
        />
      )}
    </Flex>
  );
};

RefNew.defaultProps = {
  shouldBeExpanded: false,
};

RefNew.propTypes = {
  rank: PropTypes.number.isRequired,
  parentId: PropTypes.string.isRequired,
  shouldBeExpanded: PropTypes.bool,
};

export default RefNew;
