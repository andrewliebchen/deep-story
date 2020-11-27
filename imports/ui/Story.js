import { Flex, IconButton, Text } from "theme-ui";
import { useTracker } from "meteor/react-meteor-data";
import AppContext from "./AppContext";
import InlineInput from "./InlineInput";
import React, { useContext } from "react";
import RefBreak from "./RefBreak";
import RefWord from "./RefWord";
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
            return <RefBreak key={ref._id} {...ref} />;
            break;
          default:
            return <RefWord key={ref._id} {...ref} />;
        }
      })}
    </Flex>
  );
};

export default Story;
