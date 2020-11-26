import { Flex, IconButton, Text } from "theme-ui";
import { useTracker } from "meteor/react-meteor-data";
import AppContext from "./AppContext";
import InlineInput from "./InlineInput";
import React from "react";
import RefBreak from "./RefBreak";
import RefWord from "./RefWord";

const Refs = () => (
  <AppContext.Consumer>
    {(props) => (
      <Flex sx={{ flexFlow: "wrap" }}>
        {props.refs.length === 0 && <InlineInput {...props} />}
        {props.refs.map((ref, index) => {
          const isLast = props.refs.length - 1 === index;
          const isSelected = props.refId === ref._id;
          switch (ref.type) {
            case "break":
              return (
                <RefBreak key={ref._id} isLast={isLast} {...ref} {...props} />
              );
              break;
            default:
              return (
                <RefWord
                  key={ref._id}
                  isLast={isLast}
                  isSelected={isSelected}
                  {...ref}
                  {...props}
                />
              );
          }
        })}
      </Flex>
    )}
  </AppContext.Consumer>
);

export default Refs;
