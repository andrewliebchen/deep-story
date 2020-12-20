import { refTypes } from "../utils/types";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import RefMockEdit from "./RefMockEdit";
import RefMockView from "./RefMockView";
import RefTextEdit from "./RefTextEdit";
import RefTextView from "./RefTextView";

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
  isParentRef: PropTypes.bool,
  type: PropTypes.oneOf(Object.keys(refTypes)),
};

export default RefContent;
