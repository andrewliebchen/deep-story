import { Flex } from "theme-ui";
import React, { useContext, useState } from "react";
import AppContext from "./AppContext";
import { isReady } from "../utils/helpers";

const Ref = (props) => {
  const { selectedRefId, getRef } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const ref = getRef(selectedRefId);

  return <Flex>{isReady(ref) && ref._id}</Flex>;
};

export default Ref;
