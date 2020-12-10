import {
  Text,
  Box,
  Textarea,
  Flex,
  Input,
  Heading,
  IconButton,
} from "theme-ui";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import Markdown from "react-markdown";
import UilEye from "@iconscout/react-unicons/icons/uil-eye";
import UilEyeSlash from "@iconscout/react-unicons/icons/uil-eye-slash";

const allowedMarkdownTypes = [
  "root",
  "text",
  "paragraph",
  "emphasis",
  "strong",
  "link",
  "inlineCode",
  "code",
];

const RefContent = (props) => {
  const { selectedRefId } = useContext(AppContext);
  const isSelected = selectedRefId === props._id;

  let content, form;
  switch (props.type) {
    default:
      content = (
        <Flex sx={{ variant: "flex.ref" }}>
          {props.title && props.showTitle && (
            <Heading mb={2}>{props.title}</Heading>
          )}
          <Text
            sx={{
              variant: "text.default",
              color: props.content || "textSecondary",
            }}
          >
            {props.content ? (
              <Markdown allowedTypes={allowedMarkdownTypes}>
                {props.content}
              </Markdown>
            ) : (
              "Tell a story..."
            )}
          </Text>
        </Flex>
      );
      form = (
        <Box>
          <Flex
            sx={{
              variant: "flex.ref",
              mb: 2,
              p: 2,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{ variant: "iconButton.default", mr: 2 }}
              children={props.showTitle ? <UilEye /> : <UilEyeSlash />}
              onClick={() =>
                Meteor.call("refs.update", props._id, {
                  showTitle: !props.showTitle,
                })
              }
            />
            <Input
              variant="input.inline"
              placeholder="Add a title..."
              defaultValue={props.title}
              onChange={(event) =>
                Meteor.call("refs.update", props._id, {
                  title: event.target.value,
                })
              }
              sx={{
                fontWeight: "bold",
                color: props.showTitle ? "text" : "textSecondary",
              }}
            />
          </Flex>
          <Textarea
            onChange={(event) =>
              Meteor.call("refs.update", props._id, {
                content: event.target.value,
              })
            }
            defaultValue={props.content}
            placeholder="Tell a story..."
            sx={{ variant: "textarea.ref" }}
          />
        </Box>
      );
  }

  return isSelected ? form : content;
};

RefContent.propTypes = {
  _id: PropTypes.string,
  content: PropTypes.node,
  rank: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.oneOf(["text"]),
  showTitle: PropTypes.bool,
};

export default RefContent;
