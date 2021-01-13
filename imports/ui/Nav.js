import { Box, Flex, Button, Text } from "theme-ui";
import { Home } from "react-feather";
import { useHistory } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import useHover from "@react-hook/hover";
import { refTypes } from "../utils/types";

const Nav = (props) => {
  const history = useHistory();
  const target = useRef(null);
  const isHovering = useHover(target);

  return (
    <Box
      ref={target}
      sx={{
        size: "control",
        position: "relative",
      }}
    >
      {isHovering ? (
        <Flex
          sx={{
            position: "absolute",
            top: -3,
            left: -3,
            width: 300,
            p: 3,
            flexDirection: "column",
            gap: 2,
            bg: "background",
            boxShadow: "overlay",
            borderRadius: 4,
          }}
        >
          <Button
            variant="button.secondary"
            onClick={() => history.push("/refs")}
          >
            <Home />
            <Text sx={{ ml: 2 }}>All refs</Text>
          </Button>
          {Object.keys(refTypes).map((key) => {
            const type = refTypes[key];
            return (
              <Button
                variant="button.secondary"
                key={key}
                onClick={() => history.push(type.route)}
              >
                {type.icon}
                <Text sx={{ ml: 2 }}>{type.label}</Text>
              </Button>
            );
          })}
        </Flex>
      ) : (
        <Button
          variant="button.secondary"
          children={<Home />}
          onClick={() => history.push("/refs")}
        />
      )}
    </Box>
  );
};

export default Nav;
