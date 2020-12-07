import React, { useContext } from "react";
import { Flex, Text } from "theme-ui";
import { Link } from "react-router-dom";
import AppContext from "./AppContext";
import { isReady } from "../utils/helpers";

const RefTile = (props) => {
  const { refs } = useContext(AppContext);

  return (
    <Link to={`/refs/${props._id}`}>
      {props.story.length > 0 ? (
        <Flex
          sx={{
            variant: "flex.tile",
            flexFlow: "wrap",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {props.story.map((id) => {
            const wordRef = refs.find((ref) => ref._id === id);

            return (
              <Text
                key={id}
                children={isReady(wordRef) && `${wordRef.text} `}
                sx={{ variant: "text.ref", fontSize: "small" }}
              />
            );
          })}
        </Flex>
      ) : (
        <Flex
          sx={{
            variant: "flex.tile",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            sx={{
              variant: "text.ref",
              color: "textSecondary",
              fontSize: "small",
            }}
          >
            Nothing yet
          </Text>
        </Flex>
      )}
    </Link>
  );
};

export default RefTile;
