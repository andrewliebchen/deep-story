import { Box, Button, Flex, Heading, Text, useColorMode } from "theme-ui";
import { ReferencesCollection } from "../api/references";
import { useTracker } from "meteor/react-meteor-data";
import React from "react";
import InlineInput from "./InlineInput";

export default (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const references = useTracker(() => ReferencesCollection.find({}).fetch());

  return (
    <Box p={3}>
      <Flex
        sx={{ mb: 3, alignItems: "center", justifyContent: "space-between" }}
      >
        <Heading>Deep Story</Heading>
        <Button
          onClick={() =>
            setColorMode(colorMode === "default" ? "dark" : "default")
          }
        >
          {colorMode === "default" ? "Dark" : "Light"}
        </Button>
      </Flex>
      <Flex sx={{ flexFlow: "wrap" }}>
        {references.map((reference, index) => {
          const isLast = references.length - 1 === index;
          switch (reference.type) {
            case "break":
              return (
                <Flex
                  key={reference._id}
                  sx={{ flexBasis: "100%", mb: 3, pt: isLast ? 2 : 0 }}
                >
                  {isLast && <InlineInput />}
                </Flex>
              );
              break;
            default:
              return (
                <Flex key={reference._id} sx={{ flexShrink: 0 }}>
                  <Text sx={{ mr: 1 }}>{reference.text}</Text>
                  {isLast && <InlineInput />}
                </Flex>
              );
          }
        })}
      </Flex>
    </Box>
  );
};
