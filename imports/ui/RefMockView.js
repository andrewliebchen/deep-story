import { isReady } from "../utils/helpers";
import capitalize from "capitalize";
import PropTypes from "prop-types";
import React from "react";
import { MoreVertical } from "react-feather";
import PersonCard from "./PersonCard";

const imageSize = 120;

const RefMockView = (props) => (
  <PersonCard
    image={props.data.image}
    title={props.data.name || props.data.title}
    subtitle="Person"
  />
);

RefMockView.propTypes = {
  data: PropTypes.object,
  showTitle: PropTypes.bool,
  title: PropTypes.string,
};

export default RefMockView;
