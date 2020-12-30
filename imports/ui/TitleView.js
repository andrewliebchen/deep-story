import React from "react";
import PropTypes from "prop-types";
import { Heading } from "theme-ui";

const TitleView = (props) =>
  props.title && props.showTitle ? (
    <Heading sx={props.isParentRef ? { fontSize: 3, mt: 2, mb: 3 } : { mb: 2 }}>
      {props.title}
    </Heading>
  ) : (
    false
  );

export default TitleView;
