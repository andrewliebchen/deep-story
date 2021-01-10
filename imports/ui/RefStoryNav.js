import { Box, Flex, Text, Link } from "theme-ui";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import useHover from "@react-hook/hover";

const RefStoryNavElement = (props) => {
  const target = useRef(null);
  const isHovering = useHover(target);

  return (
    <Link href={`#ref_${props._id}`}>
      <Flex
        sx={{ alignItems: "center", cursor: "pointer", my: 1 }}
        ref={target}
      >
        <Box
          sx={{
            width: 8,
            height: "control",
            bg: isHovering
              ? "primary"
              : props.isNavHovering
              ? "primaryMuted"
              : "muted",
            mr: 3,
            borderRadius: 1,
            ".refStoryNavElementIsActive > &": {
              bg: "primary",
            },
          }}
        />
        <Text
          sx={{
            color: isHovering ? "text" : "textSecondary",
            opacity: props.isNavHovering ? 1 : 0,
            maxWidth: 200,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {props.title || "Untitled"}
        </Text>
      </Flex>
    </Link>
  );
};

const RefStoryNav = (props) => {
  const target = useRef(null);
  const isHovering = useHover(target);

  return (
    <Box
      ref={target}
      sx={{
        position: "fixed",
        left: 4,
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      {props.refs.map((ref) => (
        <RefStoryNavElement key={ref._id} isNavHovering={isHovering} {...ref} />
      ))}
    </Box>
  );
};

RefStoryNav.propTypes = {
  refs: PropTypes.array,
};

export default RefStoryNav;
