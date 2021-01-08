import { Box, Card, Flex, Button, Text } from "theme-ui";
import { CornerRightDown } from "react-feather";
import { useChildRefsCount } from "../utils/hooks";
import { useHistory } from "react-router-dom";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useRef } from "react";
import RefContent from "./RefContent";
import useDoubleClick from "use-double-click";
import useHover from "@react-hook/hover";
import Toolbar from "./Toolbar";

const Ref = (props) => {
  const { selectedRefId, setSelectedRefId } = useContext(AppContext);
  const isSelected = selectedRefId === props._id;
  const refCount = useChildRefsCount(props._id);

  const history = useHistory();

  const target = useRef(null);
  const isHovering = useHover(target);

  useDoubleClick({
    onSingleClick: (event) => isSelected || setSelectedRefId(props._id),
    onDoubleClick: (event) => isSelected || history.push(`/refs/${props._id}`),
    ref: target,
    latency: 250,
  });

  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isSelected && <Toolbar {...props} />}
      <Card
        ref={target}
        title="Click to edit, double click to view"
        sx={{
          variant: isSelected
            ? "cards.editing"
            : props.isParentRef && "cards.parent",
          position: "relative",
          mx: "auto",
          opacity: selectedRefId && (isSelected || 0.1),
          cursor: isSelected ? "default" : "pointer",
        }}
      >
        <RefContent
          isHovering={isHovering}
          isSelected={isSelected}
          {...props}
        />
        {!props.isParentRef && isHovering && refCount > 0 && !isSelected && (
          <Flex
            sx={{
              position: "absolute",
              top: 3,
              right: 3,
              color: "textPlaceholder",
              bg: "background",
              p: 2,
              borderRadius: 3,
            }}
          >
            <Text sx={{ fontWeight: "bold" }}>{refCount}</Text>
            <CornerRightDown />
          </Flex>
        )}
      </Card>
    </Flex>
  );
};

Ref.propTypes = {
  _id: PropTypes.string,
  isParentRef: PropTypes.bool,
  rank: PropTypes.number,
};

export default Ref;
