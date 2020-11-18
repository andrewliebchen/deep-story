import { Flex, IconButton, Text } from "theme-ui";
import { StoriesCollection } from "../api/stories";
import { useTracker } from "meteor/react-meteor-data";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React from "react";
import StoryBreak from "./StoryBreak";
import StoryWord from "./StoryWord";

const Story = (props) => {
  const stories = useTracker(() =>
    StoriesCollection.find({ parentId: props.currentUser }).fetch()
  );

  return (
    <Flex sx={{ flexFlow: "wrap" }}>
      {stories.length === 0 && <InlineInput {...props} />}
      {stories.map((story, index) => {
        const isLast = stories.length - 1 === index;
        switch (story.type) {
          case "break":
            return (
              <StoryBreak
                key={story._id}
                isLast={isLast}
                {...props}
                {...story}
              />
            );
            break;
          default:
            return (
              <StoryWord
                key={story._id}
                isLast={isLast}
                {...props}
                {...story}
              />
            );
        }
      })}
    </Flex>
  );
};

Story.propTypes = {
  currentUser: PropTypes.string,
};

export default Story;
