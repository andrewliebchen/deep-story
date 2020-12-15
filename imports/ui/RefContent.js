import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import RefTextView from "./RefTextView";
import RefTextEdit from "./RefTextEdit";
import RefMockView from "./RefMockView";
import RefMockEdit from "./RefMockEdit";

const RefContent = (props) => {
  const { selectedRefId } = useContext(AppContext);
  const isSelected = selectedRefId === props._id;

  let view, edit;

  switch (props.type) {
    case "mock":
      view = <RefMockView {...props} />;
      edit = <RefMockEdit {...props} />;
      break;
    default:
      view = <RefTextView {...props} />;
      edit = <RefTextEdit {...props} />;
  }

  return isSelected ? edit : view;
};

RefContent.propTypes = {
  _id: PropTypes.string,
  type: PropTypes.oneOf(["text", "mock", "base"]),
};

export default RefContent;
