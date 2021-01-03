import React, { useRef } from "react";
import useHover from "@react-hook/hover";
import { Box, Flex, Text } from "theme-ui";

const RefStoryNavElement = (props) => {
  const target = useRef(null);
  const isHovering = useHover(target);

  return (
    <Flex sx={{ alignItems: "center", cursor: "pointer", my: 1 }} ref={target}>
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
        }}
      />
      <Text
        sx={{
          color: isHovering ? "text" : "textSecondary",
          opacity: props.isNavHovering ? 1 : 0,
        }}
      >
        {props.title || "Untitled"}
      </Text>
    </Flex>
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
        left: 3,
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

export default RefStoryNav;
