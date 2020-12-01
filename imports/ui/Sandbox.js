import React, { useContext } from "react";
import { Divider, Flex, Button, IconButton, Text, Heading } from "theme-ui";
import AppContext from "./AppContext";
import { Feather } from "react-feather";

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
      <Flex>
        <Button
          variant="button.default"
          m={3}
          title="Toggle color mode"
          children={colorMode === "default" ? "Light" : "Dark"}
          onClick={() =>
            setColorMode(colorMode === "default" ? "dark" : "default")
          }
        />
        <Button m={3} variant="button.primary">
          Primary
        </Button>
      </Flex>
      <IconButton variant="button.default" m={3} children={<Feather />} />
    </Flex>
  );
};

export default Sandbox;
