import { Flex } from "theme-ui";
import { isReady } from "../utils/helpers";
import AppContext from "./AppContext";
import NewInput from "./NewInput";
import LineBreak from "./LineBreak";
import React, { useContext, useState } from "react";
import WordBlock from "./WordBlock";
import yallist from "yallist";

const Story = () => {
  const { refs, story, selectedRefId } = useContext(AppContext);
  let index = 0;

  const hasStory = story.length > 0;
  const storyLinkedList = hasStory && yallist.create(story);

  return (
    <Flex sx={{ flexFlow: "wrap" }}>
      {hasStory &&
        storyLinkedList.map((refId, list) => {
          let node;
          const ref = refs.find((r) => r._id === refId);
          const typeCatcher = ref.type || "story";

          console.log(story.indexOf(refId));

          switch (typeCatcher) {
            case "break":
              node = <LineBreak key={ref._id} index={index} {...ref} />;
              break;
            default:
              node = <WordBlock key={ref._id} index={index} {...ref} />;
          }

          index++;
          return node;
        })}
      {!selectedRefId && <NewInput />}
    </Flex>
  );
};

export default Story;
