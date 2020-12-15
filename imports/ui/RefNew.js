import { Flex, IconButton } from "theme-ui";
import { refTypes } from "../utils/types";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import useHover from "@react-hook/hover";

const RefNew = (props) => {
  const { setSelectedRefId } = useContext(AppContext);
  const [isSelectingType, setIsSelectingType] = useState(false);
  const { parentRefId } = useParams();

  const target = React.useRef(null);
  const isHovering = useHover(target);

  const insert = (type) =>
    Meteor.call(
      "refs.insert",
      {
        type: type,
        parentId: parentRefId,
        rank: props.rank,
      },
      (error, id) => {
        setSelectedRefId(id);
        setIsSelectingType(false);
      }
    );

  return (
    <>
      {isSelectingType ? (
        <Flex
          sx={{ variant: "flex.refWrapper", bg: "primaryMuted", px: 3, py: 4 }}
        >
          {refTypes.map((type) => (
            <IconButton
              key={type.stub}
              onClick={() => insert(type.stub)}
              sx={{ variant: "iconButton.white", mr: 2 }}
              children={type.icon}
              disabled={!type.active}
            />
          ))}

          <IconButton
            onClick={() => setIsSelectingType(false)}
            sx={{
              variant: "iconButton.white",
              color: "negative",
              position: "absolute",
              right: 3,
              "&:hover": {
                bg: "negativeBackground",
              },
            }}
            children={<UilTrash />}
          />
        </Flex>
      ) : (
        <Flex ref={target} sx={{ variant: "flex.refNew" }}>
          {isHovering && (
            <IconButton
              onClick={() => setIsSelectingType(true)}
              sx={{ variant: "iconButton.default" }}
              children={<UilPlus />}
            />
          )}
        </Flex>
      )}
    </>
  );
};

RefNew.propTypes = {
  rank: PropTypes.number,
};

export default RefNew;
