import { Flex, Input, IconButton } from "theme-ui";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import React from "react";
import UilEye from "@iconscout/react-unicons/icons/uil-eye";
import UilEyeSlash from "@iconscout/react-unicons/icons/uil-eye-slash";

const TitleEdit = (props) => (
  <Flex
    sx={{
      variant: "flex.ref",
      alignItems: "center",
      flexDirection: "row",
      px: 3,
      py: 2,
    }}
  >
    <Input
      defaultValue={props.title}
      placeholder="Add a title..."
      onChange={(event) =>
        Meteor.call("refs.update", props._id, {
          title: event.target.value,
        })
      }
      sx={{
        variant: "input.inline",
        color: props.showTitle ? "text" : "textSecondary",
        fontWeight: "bold",
      }}
    />
    <IconButton
      sx={{ variant: "iconButton.default" }}
      children={props.showTitle ? <UilEye /> : <UilEyeSlash />}
      onClick={() =>
        Meteor.call("refs.update", props._id, {
          showTitle: !props.showTitle,
        })
      }
      title={props.showTitle ? "Hide ref title" : "Show ref title"}
    />
  </Flex>
);

TitleEdit.propTypes = {
  _id: PropTypes.string,
  showTitle: PropTypes.bool,
  title: PropTypes.string,
};

export default TitleEdit;
