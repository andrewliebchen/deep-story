import { Flex } from "theme-ui";
import { isReady } from "../utils/helpers";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import LineBreak from "./LineBreak";
import NewInput from "./NewInput";
import React, { useContext, useState } from "react";
import WordBlock from "./WordBlock";
import yallist from "yallist";

const Story = () => {
  const { getRef, selectedRefId } = useContext(AppContext);
  const { refId } = useParams();
  let index = 0;

  const parentRef = getRef(refId);
  const hasStory = isReady(parentRef) && parentRef.story.length > 0;

  return (
    <Flex sx={{ flexFlow: "wrap" }}>
      {hasStory &&
        yallist.create(parentRef.story).map((childRefId, list) => {
          let node;
          const ref = getRef(childRefId);

          if (isReady(ref)) {
            switch (ref.type) {
              case "break":
                node = <LineBreak key={ref._id} index={index} {...ref} />;
                break;
              default:
                node = <WordBlock key={ref._id} index={index} {...ref} />;
            }
          }

          index++;
          return node;
        })}
      {!selectedRefId && <NewInput />}
    </Flex>
  );
};

export default Story;
