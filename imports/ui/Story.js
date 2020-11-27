import { Flex } from "theme-ui";
import { isReady } from "../utils/helpers";
import AppContext from "./AppContext";
import InlineInput from "./InlineInput";
import LineBreak from "./LineBreak";
import React, { useContext } from "react";
import Word from "./Word";
import yallist from "yallist";

const Story = () => {
  const { refs, story, selectedRefId } = useContext(AppContext);
  const hasStory = story.length > 0;
  const storyLinkedList = hasStory && yallist.create(story);

  return (
    <Flex sx={{ flexFlow: "wrap" }}>
      {hasStory &&
        storyLinkedList.map((refId) => {
          const ref = refs.find((r) => refId === r._id);
          if (isReady(ref)) {
            switch (ref.type) {
              case "break":
                return <LineBreak key={ref._id} {...ref} />;
                break;
              default:
                return <Word key={ref._id} {...ref} />;
            }
          }
        })}
      {!selectedRefId && <InlineInput />}
    </Flex>
  );
};

export default Story;
