import { Box, Card, Flex, Button, Text } from "theme-ui";
import { Check, CornerRightDown, Edit2, Trash } from "react-feather";
import { useHistory } from "react-router-dom";
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

  const history = useHistory();

  // TODO: Investigate hiding actions if the cursor stops moving...

  return (
    <Card
      ref={target}
      sx={{
        variant: isSelected
          ? "cards.editing"
          : props.isParentRef && "cards.parent",
        position: "relative",
        mx: "auto",
        opacity: selectedRefId && (isSelected || 0.3),
      }}
    >
      <RefContent isHovering={isHovering} {...props} />
      {!selectedRefId && isHovering && (
        <Flex
          sx={{
            position: "absolute",
            top: 1,
            left: 0,
            right: 0,
            justifyContent: "center",
          }}
        >
          <Flex
            sx={{
              bg: "background",
              borderRadius: 3,
              border: "4px solid",
              borderColor: "background",
              gap: 2,
            }}
          >
            <Button
              children={<Edit2 />}
              sx={{ variant: "button.secondary" }}
              onClick={() => !isSelected && setSelectedRefId(props._id)}
              title="Edit"
            />
            {props.isParentRef || (
              <Button
                title="Show children"
                sx={{ variant: "button.primary" }}
                title="View"
                onClick={(event) => {
                  event.stopPropagation();
                  history.push(`/refs/${props._id}`);
                }}
              >
                <CornerRightDown />
                {refCount > 0 && <Text sx={{ ml: 1 }}>{refCount}</Text>}
              </Button>
            )}
          </Flex>
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
