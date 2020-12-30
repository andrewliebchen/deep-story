import { Text } from "theme-ui";
import Markdown from "react-markdown";
import PropTypes from "prop-types";
import React from "react";

const allowedMarkdownTypes = [
  "code",
  "emphasis",
  "inlineCode",
  "link",
  "paragraph",
  "root",
  "strong",
  "text",
];

const RefTextView = (props) => (
  <Text sx={{ color: props.content || "textPlaceholder" }}>
    {props.content ? (
      <Markdown allowedTypes={allowedMarkdownTypes}>{props.content}</Markdown>
    ) : (
      "Tell a story..."
    )}
  </Text>
);

RefTextView.propTypes = {
  content: PropTypes.node,
};

export default RefTextView;
