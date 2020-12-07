import { Flex } from "theme-ui";
import InlineInput from "./InlineInput";
import React, { useContext } from "react";
import AppContext from "./AppContext";
import Highlight from "./Highlight";
import PropTypes from "prop-types";

const LineBreak = (props) => {
  const { selectedRefId, setSelectedRefId } = useContext(AppContext);
  const isSelected = selectedRefId === props._id;

  return (
    <Flex variant="flex.lineBreak" onClick={() => setSelectedRefId(props._id)}>
      {isSelected && <Highlight />}
    </Flex>
  );
};

LineBreak.propTypes = {
  _id: PropTypes.string,
};

export default LineBreak;
