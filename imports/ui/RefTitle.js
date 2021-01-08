import { Flex, Input, Button, Heading } from "theme-ui";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import React from "react";

const RefTitle = (props) =>
  props.isSelected ? (
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
        mb: 3,
        width: "100%",
        "&::placeholder": {
          fontWeight: "normal",
        },
      }}
    />
  ) : props.title && props.showTitle ? (
    <Heading
      sx={{ fontSize: props.isParentRef && 3, mb: props.isParentRef ? 3 : 2 }}
    >
      {props.title}
    </Heading>
  ) : (
    false
  );

RefTitle.propTypes = {
  _id: PropTypes.string,
  showTitle: PropTypes.bool,
  title: PropTypes.string,
  isSelected: PropTypes.bool,
};

export default RefTitle;
