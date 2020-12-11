import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import RefContentText from "./RefContentText";
import RefContentTextForm from "./RefContentTextForm";
import RefContentMock from "./RefContentMock";
import RefContentMockForm from "./RefContentMockForm";

const RefContent = (props) => {
  const { selectedRefId } = useContext(AppContext);
  const isSelected = selectedRefId === props._id;

  let content, form;

  switch (props.type) {
    case "mock":
      content = <RefContentMock {...props} />;
      form = <RefContentMockForm {...props} />;
      break;
    default:
      content = <RefContentText {...props} />;
      form = <RefContentTextForm {...props} />;
  }

  return isSelected ? form : content;
};

RefContent.propTypes = {
  _id: PropTypes.string,
  type: PropTypes.oneOf(["text", "mock"]),
};

export default RefContent;
