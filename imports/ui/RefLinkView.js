import { useGetRef } from "../utils/hooks";
import React from "react";
import PropTypes from "prop-types";
import RefContent from "./RefContent";
import { Link } from "react-feather";
import { Flex, Box } from "theme-ui";

const RefLinkView = (props) => {
  const ref = useGetRef(props.linkId);

  return (
    <Flex sx={{ position: "relative" }}>
      {props.isHovering && (
        <Flex
          title="This ref is a link to ANOTHER ref"
          sx={{
            alignItems: "center",
            bg: "background",
            borderRadius: 3,
            color: "textPlaceholder",
            justifyContent: "center",
            position: "absolute",
            right: -2,
            size: "control",
            top: -2,
          }}
        >
          <Link />
        </Flex>
      )}
      <RefContent {...ref} />
    </Flex>
  );
};

RefLinkView.propTypes = {
  isHovering: PropTypes.bool,
};

export default RefLinkView;
