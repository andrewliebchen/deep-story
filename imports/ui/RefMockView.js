import PersonCard from "./PersonCard";
import React from "react";

const imageSize = 120;

const RefMockView = (props) => (
  <PersonCard
    image={props.data.image}
    title={props.data.name || props.data.title}
    subtitle="Person"
  />
);

export default RefMockView;
