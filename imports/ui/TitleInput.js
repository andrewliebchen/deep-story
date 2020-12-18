import React from "react";
import { Flex, Input, IconButton } from "theme-ui";
import UilEye from "@iconscout/react-unicons/icons/uil-eye";
import UilEyeSlash from "@iconscout/react-unicons/icons/uil-eye-slash";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";

const TitleInput = (props) => (
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
      placeholder="Add a title..."
      defaultValue={props.title}
      onChange={(event) =>
        Meteor.call("refs.update", props._id, {
          title: event.target.value,
        })
      }
      sx={{
        variant: "input.inline",
        fontWeight: "bold",
        color: props.showTitle ? "text" : "textSecondary",
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

TitleInput.propTypes = {
  showTitle: PropTypes.bool,
  _id: PropTypes.string,
  title: PropTypes.string,
};

export default TitleInput;
