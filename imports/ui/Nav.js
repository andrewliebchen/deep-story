import { Box, Flex, Button, Text } from "theme-ui";
import { Home } from "react-feather";
import { refTypes } from "../utils/types";
import { useHistory } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import useHover from "@react-hook/hover";

const Nav = (props) => {
  const history = useHistory();
  const target = useRef(null);
  const isHovering = useHover(target);

  return (
    <Box
      ref={target}
      sx={{
        position: "relative",
        size: "control",
      }}
    >
      {isHovering ? (
        <Flex
          sx={{
            bg: "background",
            borderRadius: 4,
            boxShadow: "overlay",
            flexDirection: "column",
            gap: 2,
            left: -3,
            p: 3,
            position: "absolute",
            top: -3,
            width: 300,
          }}
        >
          <Button
            sx={{ variant: "button.secondary" }}
            onClick={() => history.push("/refs")}
          >
            <Home />
            <Text sx={{ ml: 2 }}>All refs</Text>
          </Button>
          {Object.keys(refTypes).map((key) => {
            const type = refTypes[key];
            return (
              <Button
                sx={{ variant: "button.secondary" }}
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
          sx={{ variant: "button.secondary" }}
          children={<Home />}
          onClick={() => history.push("/refs")}
        />
      )}
    </Box>
  );
};

export default Nav;
