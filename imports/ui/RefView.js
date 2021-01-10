import { Card, Flex, Text, Heading } from "theme-ui";
import { CornerRightDown } from "react-feather";
import { useChildRefsCount } from "../utils/hooks";
import { useHistory } from "react-router-dom";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useRef, useContext } from "react";
import RefContent from "./RefContent";
import useDoubleClick from "use-double-click";
import useHover from "@react-hook/hover";

const RefView = (props) => {
  const { stopEditMode } = useContext(AppContext);
  const refCount = useChildRefsCount(props._id);

  const history = useHistory();

  const target = useRef(null);
  const isHovering = useHover(target);

  useDoubleClick({
    onSingleClick: (event) =>
      stopEditMode || history.push(`/refs/${props._id}/edit`),
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
      }}
    >
      <Card
        ref={target}
        title="Click to edit, double click to view"
        sx={{
          variant: props.isParentRef && "cards.parent",
          cursor: "pointer",
          mx: "auto",
          position: "relative",
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
              bg: "background",
              borderRadius: 3,
              color: "textPlaceholder",
              p: 2,
              position: "absolute",
              right: 3,
              top: 3,
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
