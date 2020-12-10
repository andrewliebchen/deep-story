import { Flex, IconButton } from "theme-ui";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import AppContext from "./AppContext";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import UilTextFields from "@iconscout/react-unicons/icons/uil-text-fields";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import useHover from "@react-hook/hover";

const RefNew = (props) => {
  const { setSelectedRefId } = useContext(AppContext);
  const [isSelectingType, setIsSelectingType] = useState(false);
  const { parentRefId } = useParams();

  const target = React.useRef(null);
  const isHovering = useHover(target);

  return (
    <>
      {isSelectingType ? (
        <Flex sx={{ variant: "flex.refWrapper", bg: "primaryMuted" }}>
          <IconButton
            onClick={() =>
              Meteor.call(
                "refs.insert",
                {
                  type: "text",
                  parentId: parentRefId,
                  rank: props.rank,
                },
                (error, id) => {
                  setSelectedRefId(id);
                  setIsSelectingType(false);
                }
              )
            }
            sx={{ variant: "iconButton.white", mr: 2 }}
            children={<UilTextFields />}
          />
          <IconButton
            onClick={() => setIsSelectingType(false)}
            sx={{
              variant: "iconButton.white",
              color: "negative",
              mr: 2,
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
