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
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import ArrowUp from "@iconscout/react-unicons/icons/uil-arrow-up";

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
        <Button
          variant="button.primary"
          m={3}
          title="Toggle color mode"
          children={colorMode === "default" ? "Light" : "Dark"}
          onClick={() =>
            setColorMode(colorMode === "default" ? "dark" : "default")
          }
        />
        <Button m={3} variant="button.default">
          Default
        </Button>
        <Button m={3} variant="button.default">
          <ArrowUp />
          <Text ml={3}>Parent</Text>
        </Button>
        <IconButton variant="iconButton.default" m={3} children={<Sun />} />
        <IconButton variant="iconButton.primary" m={3} children={<Moon />} />
        <IconButton m={2} variant="iconButton.negative">
          <Trash />
        </IconButton>
      </Flex>
      <Box m={3}>
        <Select sx={{ variant: "select.default" }}>
          <option>Option</option>
        </Select>
      </Box>
      <Box m={3}>
        <Input variant="input.default" placeholder="Placeholder" />
      </Box>
    </Flex>
  );
};

export default Sandbox;
