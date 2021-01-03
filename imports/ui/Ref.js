import { Box, Card, Flex, Button, Text } from "theme-ui";
import { Check, CornerRightDown, Edit2, Trash } from "react-feather";
import { Link } from "react-router-dom";
import { useChildRefsCount } from "../utils/hooks";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useRef } from "react";
import RefContent from "./RefContent";
import useHover from "@react-hook/hover";
import { Eye, EyeOff } from "react-feather";

const Ref = (props) => {
  const { selectedRefId, setSelectedRefId } = useContext(AppContext);
  const isSelected = selectedRefId === props._id;
  const refCount = useChildRefsCount(props._id);

  const target = useRef(null);
  const isHovering = useHover(target);

  return (
    <Flex
      sx={{ position: "relative", width: "100vw", justifyContent: "center" }}
      ref={target}
    >
      <Card
        onClick={() => !isSelected && setSelectedRefId(props._id)}
        sx={{
          variant: isSelected
            ? "cards.editing"
            : props.isParentRef && "cards.parent",
          cursor: isSelected ? "default" : "pointer",
        }}
      >
        {isSelected && (
          <Flex
            sx={{
              p: 2,
              bg: "muted",
              borderRadius: 3,
              justifyContent: "space-between",
            }}
          >
            <Button
              sx={{
                variant: "button.background",
              }}
              children={props.showTitle ? <Eye /> : <EyeOff />}
              onClick={() =>
                Meteor.call("refs.update", props._id, {
                  showTitle: !props.showTitle,
                })
              }
              title={props.showTitle ? "Hide ref title" : "Show ref title"}
            />
            <Flex>
              <Button
                onClick={() =>
                  window.confirm("Are you sure you want to delete this ref?") &&
                  Meteor.call("refs.remove", props._id)
                }
                sx={{
                  variant: "button.backgroundNegative",
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
          </Flex>
        )}

        <RefContent isHovering={isHovering} {...props} />
      </Card>

      {isHovering && (
        <Flex variant="flex.refActions">
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
    </Flex>
  );
};

Ref.propTypes = {
  _id: PropTypes.string,
  isParentRef: PropTypes.bool,
  rank: PropTypes.number,
};

export default Ref;
