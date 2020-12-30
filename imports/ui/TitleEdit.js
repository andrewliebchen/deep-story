import { Flex, Input, IconButton } from "theme-ui";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import React from "react";
import UilEye from "@iconscout/react-unicons/icons/uil-eye";
import UilEyeSlash from "@iconscout/react-unicons/icons/uil-eye-slash";

// TODO: Combine Edit and View components
const TitleEdit = (props) => (
  <Flex sx={{ width: "ref", mb: 3 }}>
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
        fontSize: 2,
      }}
    />
    <IconButton
      sx={{
        variant: `button.${props.isParentRef ? "background" : "secondary"}`,
      }}
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
