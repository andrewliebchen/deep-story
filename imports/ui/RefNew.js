import { Flex, IconButton } from "theme-ui";
import { refTypes } from "../utils/types";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import useHover from "@react-hook/hover";
import RefNewTypeSelector from "./RefNewTypeSelector";

const RefNew = (props) => {
  const [isSelectingType, setIsSelectingType] = useState("");

  const target = React.useRef(null);
  const isHovering = useHover(target);

  return (
    <>
      {isSelectingType || props.isSelectingType ? (
        <Flex
          sx={{ variant: "flex.refWrapper", bg: "primaryMuted", px: 3, py: 4 }}
        >
          <RefNewTypeSelector
            setIsSelectingType={setIsSelectingType}
            {...props}
          />
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
            title="Nevermind..."
          />
        </Flex>
      ) : (
        <Flex ref={target} sx={{ variant: "flex.refNew" }}>
          {isHovering && (
            <IconButton
              onClick={() => setIsSelectingType(true)}
              sx={{ variant: "iconButton.default" }}
              children={<UilPlus />}
              title="Add a ref"
            />
          )}
        </Flex>
      )}
    </>
  );
};

RefNew.propTypes = {
  rank: PropTypes.number,
  isSelectingType: PropTypes.bool,
};

export default RefNew;
