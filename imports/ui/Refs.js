import { Flex, IconButton, Text } from "theme-ui";
import { useTracker } from "meteor/react-meteor-data";
import AppContext from "./AppContext";
import InlineInput from "./InlineInput";
import React, { useContext } from "react";
import RefBreak from "./RefBreak";
import RefWord from "./RefWord";

const Refs = () => {
  const { refs, refId, user } = useContext(AppContext);
  return (
    <Flex sx={{ flexFlow: "wrap" }}>
      {refs.length === 0 && <InlineInput user={user} />}
      {refs.map((ref, index) => {
        const isLast = refs.length - 1 === index;

        switch (ref.type) {
          case "break":
            return <RefBreak key={ref._id} isLast={isLast} {...ref} />;
            break;
          default:
            return <RefWord key={ref._id} isLast={isLast} {...ref} />;
        }
      })}
    </Flex>
  );
};

export default Refs;
