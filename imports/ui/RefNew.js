import { Flex, IconButton } from "theme-ui";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import AppContext from "./AppContext";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import useHover from "@react-hook/hover";

const RefNew = (props) => {
  const { setSelectedRefId } = useContext(AppContext);
  const { parentRefId } = useParams();

  const target = React.useRef(null);
  const isHovering = useHover(target);

  return (
    <Flex ref={target} sx={{ variant: "flex.refNew" }}>
      {isHovering && (
        <IconButton
          onClick={() =>
            Meteor.call(
              "refs.insert",
              {
                type: "text",
                parentId: parentRefId,
                rank: props.rank,
              },
              (error, id) => setSelectedRefId(id)
            )
          }
          sx={{ variant: "iconButton.default" }}
          children={<UilPlus />}
        />
      )}
    </Flex>
  );
};

RefNew.propTypes = {
  rank: PropTypes.number,
};

export default RefNew;
