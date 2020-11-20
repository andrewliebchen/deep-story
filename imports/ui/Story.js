import { Flex, IconButton, Text } from "theme-ui";
import { useTracker } from "meteor/react-meteor-data";
import AppContext from "./AppContext";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React from "react";
import StoryBreak from "./StoryBreak";
import StoryWord from "./StoryWord";

const Story = () => (
  <AppContext.Consumer>
    {(props) => (
      <Flex sx={{ flexFlow: "wrap" }}>
        {props.stories.length === 0 && <InlineInput {...props} />}
        {props.stories.map((story, index) => {
          const isLast = props.stories.length - 1 === index;
          switch (story.type) {
            case "break":
              return (
                <StoryBreak
                  key={story._id}
                  isLast={isLast}
                  {...story}
                  {...props}
                />
              );
              break;
            default:
              return (
                <StoryWord
                  key={story._id}
                  isLast={isLast}
                  {...story}
                  {...props}
                />
              );
          }
        })}
      </Flex>
    )}
  </AppContext.Consumer>
);

Story.propTypes = {
  currentUser: PropTypes.string,
};

export default Story;
