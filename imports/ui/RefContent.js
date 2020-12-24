import { refTypes } from "../utils/types";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import RefMockEdit from "./RefMockEdit";
import RefMockView from "./RefMockView";
import RefTextEdit from "./RefTextEdit";
import RefTextView from "./RefTextView";
import RefLinkView from "./RefLinkView";
import RefLinkEdit from "./RefLinkEdit";

const RefContent = (props) => {
  const { selectedRefId } = useContext(AppContext);
  const isSelected = selectedRefId === props._id;

  let view, edit;

  switch (props.type) {
    case "link":
      view = <RefLinkView {...props} />;
      edit = <RefLinkEdit {...props} />;
      break;
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
};

export default RefContent;
