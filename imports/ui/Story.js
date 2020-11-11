import { Flex, IconButton, Text } from "theme-ui";
import { StoriesCollection } from "../api/stories";
import { useTracker } from "meteor/react-meteor-data";
import InlineInput from "./InlineInput";
import React from "react";
import StoryBreak from "./StoryBreak";
import StoryWord from "./StoryWord";

const Story = (props) => {
  const stories = useTracker(() => StoriesCollection.find({}).fetch());

  return (
    <Flex sx={{ flexFlow: "wrap" }}>
      {stories.length === 0 && <InlineInput />}
      {stories.map((story, index) => {
        const isLast = stories.length - 1 === index;
        switch (story.type) {
          case "break":
            return <StoryBreak key={story._id} isLast={isLast} {...story} />;
            break;
          default:
            return <StoryWord key={story._id} isLast={isLast} {...story} />;
        }
      })}
    </Flex>
  );
};

export default Story;
