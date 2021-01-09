import { Box, Card, Flex, Button, Text, Heading } from "theme-ui";
import { CornerRightDown } from "react-feather";
import { useChildRefsCount } from "../utils/hooks";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import useDoubleClick from "use-double-click";
import useHover from "@react-hook/hover";
import Toolbar from "./Toolbar";
import RefContent from "./RefContent";

const RefView = (props) => {
  const refCount = useChildRefsCount(props._id);

  const history = useHistory();

  const target = useRef(null);
  const isHovering = useHover(target);

  useDoubleClick({
    onSingleClick: (event) => history.push(`/refs/${props._id}/edit`),
    onDoubleClick: (event) => history.push(`/refs/${props._id}`),
    ref: target,
    latency: 250,
  });

  return (
    <Flex
      id={`ref_${props._id}`}
      sx={{
        flexDirection: "column",
        alignItems: "center",
        mt: -104, // Offset the scroll by the height of the header
        pt: 104,
      }}
    >
      <Card
        ref={target}
        title="Click to edit, double click to view"
        sx={{
          variant: props.isParentRef && "cards.parent",
          position: "relative",
          mx: "auto",
          cursor: "pointer",
        }}
      >
        {props.title && props.showTitle && (
          <Heading
            sx={{
              fontSize: props.isParentRef && 3,
              mb: props.isParentRef ? 3 : 2,
            }}
          >
            {props.title}
          </Heading>
        )}
        <RefContent isHovering={isHovering} {...props} />
        {!props.isParentRef && isHovering && refCount > 0 && (
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

RefView.propTypes = {
  _id: PropTypes.string,
  isParentRef: PropTypes.bool,
  rank: PropTypes.number,
};

export default RefView;
