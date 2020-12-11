import { Text, Box, Textarea, Flex, Input, IconButton } from "theme-ui";
import PropTypes from "prop-types";
import React from "react";
import UilEye from "@iconscout/react-unicons/icons/uil-eye";
import UilEyeSlash from "@iconscout/react-unicons/icons/uil-eye-slash";

const RefContentTextForm = (props) => (
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

RefContentTextForm.propTypes = {
  _id: PropTypes.string,
  content: PropTypes.node,
  title: PropTypes.string,
};

export default RefContentTextForm;
