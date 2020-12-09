import { Flex } from "theme-ui";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import RefNew from "./RefNew";

const RefStory = () => {
  const { selectedRefId, setSelectedRefId } = useContext(AppContext);

  return (
    <Flex>
      {}
      <RefNew />
    </Flex>
  );
};

export default RefStory;
