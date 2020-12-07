import { Flex, Text } from "theme-ui";
import { isReady } from "../utils/helpers";
import { Link } from "react-router-dom";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import TimeAgo from "react-timeago";
import UilEditAlt from "@iconscout/react-unicons/icons/uil-edit-alt";
import UilTextFields from "@iconscout/react-unicons/icons/uil-text-fields";

const RefTile = (props) => {
  const { refs } = useContext(AppContext);
  const hasStory = props.story.length > 0;

  return (
    <Link to={`/refs/${props._id}`}>
      <Flex variant="flex.tile">
        {hasStory ? (
          <Flex sx={{ overflow: "hidden" }}>
            <Flex sx={{ flexFlow: "wrap" }}>
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
          </Flex>
        ) : (
          <Flex sx={{ flexGrow: 1 }}>
            <Text
              sx={{
                variant: "text.ref",
                color: "textSecondary",
                fontSize: "small",
              }}
            >
              Tell your story...
            </Text>
          </Flex>
        )}
        <Flex sx={{ mx: -2 }}>
          <Flex variant="flex.tileFooterItem">
            <UilEditAlt size={16} />
            <Text sx={{ variant: "small", ml: 1 }}>
              <TimeAgo
                date={props.createdAt}
                formatter={(value, unit, suffix) => `${value}d`}
              />
            </Text>
          </Flex>
          <Flex variant="flex.tileFooterItem">
            <UilTextFields size={16} />
            <Text sx={{ variant: "small", ml: 1 }}>{props.story.length}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default RefTile;
