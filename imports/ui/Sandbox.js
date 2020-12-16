import React, { useContext } from "react";
import {
  Divider,
  Flex,
  Button,
  IconButton,
  Text,
  Heading,
  Box,
  Select,
  Input,
} from "theme-ui";
import AppContext from "./AppContext";
import Trash from "@iconscout/react-unicons/icons/uil-trash";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { refTypes } from "../utils/types";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import ArrowUp from "@iconscout/react-unicons/icons/uil-arrow-up";
import theme from "../utils/theme";

const Sandbox = () => {
  const { colorMode, setColorMode } = useContext(AppContext);

  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <Heading>Sandbox</Heading>
      <Text>This is a sandbox</Text>
      <Text variant="text.ref">This is ref body text.</Text>
      <Flex>
        {Object.keys(refTypes).map((key) => {
          const type = refTypes[key];
          return (
            <IconButton
              key={key}
              variant="iconButton.primary"
              m={1}
              children={type.icon}
              sx={{
                color: theme.colors.modes[key].primary,
                bg: theme.colors.modes[key].primaryMuted,
                "&:hover": {
                  bg: theme.colors.modes[key].primaryHover,
                  color: "background",
                },
              }}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Sandbox;
