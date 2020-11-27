import { Flex, IconButton, Text } from "theme-ui";
import { useTracker } from "meteor/react-meteor-data";
import AppContext from "./AppContext";
import InlineInput from "./InlineInput";
import React, { useContext } from "react";
import LineBreak from "./LineBreak";
import Word from "./Word";
import yallist from "yallist";

const Story = () => {
  const { refs, story } = useContext(AppContext);
  const storyLinkedList = yallist.create(story);
  console.log(story);
  console.log(storyLinkedList);

  return (
    <Flex sx={{ flexFlow: "wrap" }}>
      {storyLinkedList.map((refId) => {
        const ref = refs.find((r) => refId === r._id);
        switch (ref.type) {
          case "break":
            return <LineBreak key={ref._id} {...ref} />;
            break;
          default:
            return <Word key={ref._id} {...ref} />;
        }
      })}
    </Flex>
  );
};

export default Story;
