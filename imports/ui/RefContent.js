import { Text, Box, Textarea, Flex, Input, Heading } from "theme-ui";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";

const RefContent = (props) => {
  const { selectedRefId } = useContext(AppContext);
  const isSelected = selectedRefId === props._id;

  let content, form;
  switch (props.type) {
    default:
      content = (
        <Flex sx={{ variant: "flex.ref" }}>
          {props.title && <Heading mb={2}>{props.title}</Heading>}
          <Text
            sx={{
              variant: "text.default",
              color: props.content || "textSecondary",
            }}
          >
            {props.content || "Tell a story..."}
          </Text>
        </Flex>
      );
      form = (
        <Box>
          <Flex sx={{ variant: "flex.ref", mb: 2, py: 2 }}>
            <Input
              variant="input.inline"
              placeholder="Add a title..."
              defaultValue={props.title}
              onChange={(event) =>
                Meteor.call("refs.update", props._id, {
                  title: event.target.value,
                })
              }
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
};

export default RefContent;
