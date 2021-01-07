import { isReady } from "../utils/helpers";
import { Text, BaseStyles } from "theme-ui";
import { useGetText } from "../utils/hooks";
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
  "list",
  "listItem",
];

const RefTextView = (props) => {
  const text = useGetText({ parentId: props._id });

  return isReady(text) ? (
    <Text>
      <BaseStyles>
        <Markdown allowedTypes={allowedMarkdownTypes}>{text.content}</Markdown>
      </BaseStyles>
    </Text>
  ) : (
    <Text color="textPlaceholder">Tell a story...</Text>
  );
};

RefTextView.propTypes = {
  _id: PropTypes.string,
};

export default RefTextView;
