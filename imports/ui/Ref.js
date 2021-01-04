import { Box, Card, Flex, Button, Text } from "theme-ui";
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
  const isSelected = selectedRefId === props._id;
  const refCount = useChildRefsCount(props._id);

  const target = useRef(null);
  const isHovering = useHover(target);

  return (
    <Card
      ref={target}
      onClick={() => !isSelected && setSelectedRefId(props._id)}
      sx={{
        variant: isSelected
          ? "cards.editing"
          : props.isParentRef && "cards.parent",
        cursor: isSelected ? "default" : "pointer",
        position: "relative",
        mx: "auto",
        opacity: selectedRefId && (isSelected || 0.3),
      }}
    >
      <RefContent isHovering={isHovering} {...props} />

      {!selectedRefId && !props.isParentRef && isHovering && (
        <Flex
          sx={{
            position: "absolute",
            right: 3,
            top: 3,
          }}
        >
          <Link to={`/refs/${props._id}`}>
            <Button
              title="Show children"
              sx={{ variant: "button.primary", ml: 2 }}
            >
              <CornerRightDown />
              {refCount > 0 && <Text sx={{ ml: 1 }}>{refCount}</Text>}
            </Button>
          </Link>
        </Flex>
      )}
    </Card>
  );
};

Ref.propTypes = {
  _id: PropTypes.string,
  isParentRef: PropTypes.bool,
  rank: PropTypes.number,
};

export default Ref;
