import { Flex, Input, IconButton } from "theme-ui";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import React from "react";
import { Eye, EyeOff } from "react-feather";

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
        variant: "forms.inputGhosted",
        color: props.showTitle ? "text" : "textSecondary",
        fontWeight: "bold",
        fontSize: 2,
        "&::placeholder": {
          fontWeight: "normal",
        },
      }}
    />
    <IconButton
      sx={{
        variant: `button.${props.isParentRef ? "background" : "secondary"}`,
      }}
      children={props.showTitle ? <Eye /> : <EyeOff />}
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
