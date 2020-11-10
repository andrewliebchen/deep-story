import { Box, Flex, Heading, IconButton, Text, useColorMode } from "theme-ui";
import { Moon, Sun } from "react-feather";
import { StoriesCollection } from "../api/stories";
import { useTracker } from "meteor/react-meteor-data";
import InlineInput from "./InlineInput";
import React from "react";
import StoryBreak from "./StoryBreak";
import StoryWord from "./StoryWord";

export default (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const stories = useTracker(() => StoriesCollection.find({}).fetch());

  return (
    <Flex sx={{ justifyContent: "center" }}>
      <Box sx={{ p: 3, maxWidth: 600 }}>
        <Flex
          sx={{ mb: 3, alignItems: "center", justifyContent: "space-between" }}
        >
          <Heading>Deep Story</Heading>
          <IconButton
            title="Toggle color mode"
            onClick={() =>
              setColorMode(colorMode === "default" ? "dark" : "default")
            }
          >
            {colorMode === "default" ? <Moon /> : <Sun />}
          </IconButton>
        </Flex>
        <Flex sx={{ flexFlow: "wrap" }}>
          {stories.length === 0 && <InlineInput />}
          {stories.map((story, index) => {
            const isLast = stories.length - 1 === index;
            switch (story.type) {
              case "break":
                return (
                  <StoryBreak key={story._id} isLast={isLast} {...story} />
                );
                break;
              default:
                return <StoryWord key={story._id} isLast={isLast} {...story} />;
            }
          })}
        </Flex>
      </Box>
    </Flex>
  );
};
