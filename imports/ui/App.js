import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  useColorMode,
} from "theme-ui";
import { ReferencesCollection } from "../api/references";
import { useKeycode } from "@accessible/use-keycode";
import { useTracker } from "meteor/react-meteor-data";
import React, { useState } from "react";

const App = (props) => {
  const [value, setValue] = useState("");
  const [colorMode, setColorMode] = useColorMode();
  const references = useTracker(() => ReferencesCollection.find({}).fetch());
  const ref = useKeycode(32, () => {
    ReferencesCollection.insert({
      createdAt: Date.now(),
      text: value,
    });
    setValue("");
  });

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
      <Flex>
        {references.map((reference) => (
          <Text key={reference._id} sx={{ flexShrink: 0, mr: 1 }}>
            {reference.text}
          </Text>
        ))}
        <Input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          ref={ref}
        />
      </Flex>
    </Box>
  );
};

export default App;
