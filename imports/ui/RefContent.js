import React from "react";
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
import RefTitle from "./RefTitle";
import { Flex } from "theme-ui";
import PropTypes from "prop-types";

const RefContent = (props) => {
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

  return (
    <Flex sx={{ flexDirection: "column" }}>
      <RefTitle {...props} />
      {props.isSelected ? edit : view}
    </Flex>
  );
};

RefContent.propTypes = {
  isSelected: PropTypes.bool,
};

export default RefContent;
