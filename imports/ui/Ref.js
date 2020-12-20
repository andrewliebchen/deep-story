import { Flex, IconButton, Text } from "theme-ui";
import { useChildRefsCount } from "../utils/hooks";
import { useHistory } from "react-router-dom";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import RefContent from "./RefContent";
import UilCheck from "@iconscout/react-unicons/icons/uil-check";
import UilCornerRightDown from "@iconscout/react-unicons/icons/uil-corner-right-down";
import UilCornerUpLeft from "@iconscout/react-unicons/icons/uil-corner-up-left";
import UilPen from "@iconscout/react-unicons/icons/uil-pen";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import useHover from "@react-hook/hover";

const Ref = (props) => {
  const { selectedRefId, setSelectedRefId } = useContext(AppContext);
  const history = useHistory();
  const refCount = useChildRefsCount(props._id);

  const target = React.useRef(null);
  const isHovering = useHover(target);

  const isSelected = selectedRefId === props._id;

  return (
    <Flex
      ref={target}
      sx={{
        variant: "flex.refWrapper",
        bg: isSelected ? "primaryMuted" : props.isParentRef && "muted",
        mb: props.isParentRef && 1,
        "&:hover": {
          bg: isSelected || "muted",
        },
      }}
    >
      <Flex variant="flex.refLeftButtons">
        {isHovering &&
          (props.isParentRef ? (
            <IconButton
              children={<UilCornerUpLeft />}
              onClick={() => history.goBack()}
              title="Back to parent"
              variant="iconButton.background"
            />
          ) : (
            <Flex sx={{ alignItems: "center" }}>
              <IconButton
                children={<UilCornerRightDown />}
                onClick={() => history.push(`/refs/${props._id}`)}
                title="Show children"
                variant="iconButton.background"
              />
              {refCount > 0 && (
                <Text
                  sx={{ color: "textSecondary", fontWeight: "bold", ml: 2 }}
                >
                  {refCount}
                </Text>
              )}
            </Flex>
          ))}
      </Flex>
      <Flex variant="flex.refRightButtons">
        {isSelected && (
          <IconButton
            onClick={() =>
              window.confirm("Are you sure you want to delete this ref?") &&
              Meteor.call("refs.remove", props._id)
            }
            sx={{
              variant: "iconButton.background",
              color: "negative",
              mr: 2,
              "&:hover": {
                bg: "negativeBackground",
              },
            }}
            children={<UilTrash />}
            title="Delete"
          />
        )}
        {(isHovering || isSelected) && (
          <IconButton
            onClick={() =>
              setSelectedRefId(selectedRefId === props._id || props._id)
            }
            sx={{
              variant: `iconButton.${isSelected ? "primary" : "background"}`,
            }}
            children={isSelected ? <UilCheck /> : <UilPen />}
            title={isSelected ? "Finish" : "Edit"}
          />
        )}
      </Flex>
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
