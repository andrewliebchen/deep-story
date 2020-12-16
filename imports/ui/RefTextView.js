import { Flex, Heading, Text } from "theme-ui";
import Markdown from "react-markdown";
import PropTypes from "prop-types";
import React from "react";

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
  <Flex sx={{ variant: props.isParentRef ? "flex.parent" : "flex.ref" }}>
    {props.title && props.showTitle && <Heading>{props.title}</Heading>}
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
  isParentRef: PropTypes.bool,
};

export default RefTextView;
