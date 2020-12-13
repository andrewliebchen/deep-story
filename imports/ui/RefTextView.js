import React from "react";
import { Flex, Heading, Text } from "theme-ui";
import Markdown from "react-markdown";
import PropTypes from "prop-types";

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

const RefTextView = (props) => (
  <Flex sx={{ variant: "flex.ref" }}>
    {props.title && props.showTitle && <Heading mb={2}>{props.title}</Heading>}
    <Text
      sx={{
        variant: "text.default",
        color: props.content || "textSecondary",
      }}
    >
      {props.content ? (
        <Markdown allowedTypes={allowedMarkdownTypes}>{props.content}</Markdown>
      ) : (
        "Tell a story..."
      )}
    </Text>
  </Flex>
);

RefTextView.propTypes = {
  content: PropTypes.node,
  title: PropTypes.string,
  showTitle: PropTypes.bool,
};

export default RefTextView;
