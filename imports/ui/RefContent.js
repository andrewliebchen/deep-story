import RefLinkView from "./RefLinkView";
import RefMockView from "./RefMockView";
import RefResourceView from "./RefResourceView";
import RefTasksView from "./RefTasksView";
import RefTextView from "./RefTextView";
import React from "react";

const RefContent = (ref) => {
  switch (ref.type) {
    case "link":
      return <RefLinkView {...ref} />;
      break;
    case "mock":
      return <RefMockView {...ref} />;
      break;
    case "resource":
      return <RefResourceView {...ref} />;
      break;
    case "tasks":
      return <RefTasksView {...ref} />;
      break;
    default:
      return <RefTextView {...ref} />;
  }
};

export default RefContent;
