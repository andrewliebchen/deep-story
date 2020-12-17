import { Flex, Heading, Text } from "theme-ui";
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
  <Flex sx={{ variant: props.isParentRef ? "flex.parent" : "flex.ref" }}>
    {props.title && props.showTitle && (
      <Heading sx={{ fontSize: props.isParentRef && 3 }}>{props.title}</Heading>
    )}
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
  isParentRef: PropTypes.bool,
  showTitle: PropTypes.bool,
  title: PropTypes.string,
};

export default RefTextView;
