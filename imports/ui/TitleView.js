import React from "react";
import PropTypes from "prop-types";
import { Heading } from "theme-ui";

const TitleView = (props) => (
  <>
    {props.title && props.showTitle && (
      <Heading sx={{ fontSize: props.isParentRef && 3 }}>{props.title}</Heading>
    )}
  </>
);

export default TitleView;
