import { Flex, Button, Heading } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { refTypes } from "../utils/types";
import { X, Link } from "react-feather";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState, useRef } from "react";
import Search from "./Search";
import { useHistory } from "react-router-dom";
import useHover from "@react-hook/hover";

const RefNew = (props) => {
  const { setToastMessage } = useContext(AppContext);
  const history = useHistory();

  const target = useRef(null);
  const isHovering = useHover(target);

  const [isExpanded, setIsExpanded] = useState(props.shouldBeExpanded);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <Flex
      sx={{
        justifyContent: "center",
        bg: isExpanded && "primaryMuted",
        cursor: isExpanded ? "default" : "pointer",
        minHeight: 16,
        p: isExpanded && 4,
        borderRadius: 4,
        width: "ref",
        mx: "auto",
        my: isExpanded && 3,
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
                    (error, response) => {
                      history.push(`/refs/${response.parentRefId}/edit`);
                      setToastMessage("Ref created, now do your thing...");
                    }
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
