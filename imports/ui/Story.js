import { Flex, IconButton, Text } from "theme-ui";
import { useTracker } from "meteor/react-meteor-data";
import AppContext from "./AppContext";
import InlineInput from "./InlineInput";
import React, { useContext } from "react";
import RefBreak from "./RefBreak";
import RefWord from "./RefWord";
import yallist from "yallist";

const Story = () => {
  const { refs, refId, user, story } = useContext(AppContext);

  return (
    <Flex sx={{ flexFlow: "wrap" }}>
      {story.length === 0 ? (
        <InlineInput user={user} />
      ) : (
        story.forEach((ref) => {
          console.log(ref);
          switch (ref.type) {
            case "break":
              return <RefBreak key={ref._id} {...ref} />;
              break;
            default:
              return <RefWord key={ref._id} {...ref} />;
          }
        })
      )}
    </Flex>
  );
};

export default Story;
