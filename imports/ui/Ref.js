import { Box, Flex, Button, Text } from "theme-ui";
import { Check, CornerRightDown, Edit2, Trash } from "react-feather";
import { Link } from "react-router-dom";
import { useChildRefsCount } from "../utils/hooks";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useRef } from "react";
import RefContent from "./RefContent";
import useHover from "@react-hook/hover";

const Ref = (props) => {
  const { selectedRefId, setSelectedRefId } = useContext(AppContext);
  const refCount = useChildRefsCount(props._id);

  const target = useRef(null);
  const isHovering = useHover(target);

  return (
    <Flex
      ref={target}
      sx={{
        variant: props.isParentRef ? "flex.parentWrapper" : "flex.wrapper",
      }}
    >
      {selectedRefId === props._id ? (
        <Flex variant="flex.refActions">
          <Button
            onClick={() =>
              window.confirm("Are you sure you want to delete this ref?") &&
              Meteor.call("refs.remove", props._id)
            }
            sx={{
              variant: `button.${
                props.isParentRef ? "backgroundNegative" : "negative"
              }`,
            }}
            children={<Trash />}
            title="Delete"
          />
          <Button
            onClick={() => setSelectedRefId(false)}
            sx={{ variant: "button.positive", ml: 2 }}
            children={<Check />}
            title="Done"
          />
        </Flex>
      ) : (
        isHovering && (
          <Flex variant="flex.refActions">
            <Button
              onClick={() => setSelectedRefId(props._id)}
              sx={{
                variant: `button.${
                  props.isParentRef ? "background" : "secondary"
                }`,
              }}
              children={<Edit2 />}
              title="Edit"
            />
            {props.isParentRef || (
              <Link to={`/refs/${props._id}`}>
                <Button
                  title="Show children"
                  sx={{ variant: "button.primary", ml: 2 }}
                >
                  <CornerRightDown />
                  {refCount > 0 && <Text sx={{ ml: 1 }}>{refCount}</Text>}
                </Button>
              </Link>
            )}
          </Flex>
        )
      )}
      <RefContent isHovering={isHovering} {...props} />
    </Flex>
  );
};

Ref.propTypes = {
  _id: PropTypes.string,
  isParentRef: PropTypes.bool,
  rank: PropTypes.number,
};

export default Ref;
