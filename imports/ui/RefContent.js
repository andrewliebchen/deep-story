import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import RefLinkEdit from "./RefLinkEdit";
import RefLinkView from "./RefLinkView";
import RefMockEdit from "./RefMockEdit";
import RefMockView from "./RefMockView";
import RefResourceEdit from "./RefResourceEdit";
import RefResourceView from "./RefResourceView";
import RefTasksEdit from "./RefTasksEdit";
import RefTasksView from "./RefTasksView";
import RefTextEdit from "./RefTextEdit";
import RefTextView from "./RefTextView";

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
    case "resource":
      view = <RefResourceView {...props} />;
      edit = <RefResourceEdit {...props} />;
      break;
    case "tasks":
      view = <RefTasksView {...props} />;
      edit = <RefTasksEdit {...props} />;
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
