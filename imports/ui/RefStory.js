import { Flex } from "theme-ui";
import React, { useState } from "react";
import RefNew from "./RefNew";
import { useParams } from "react-router-dom";
import Ref from "./Ref";
import yallist from "yallist";
import { useChildRefs } from "../utils/hooks";

// Need to use Yallist for the Refs during the session, save an index on each item.
// Write those indexes back to the Ref collection...

const RefStory = () => {
  const [selectedRefId, setSelectedRefId] = useState(false);
  const { parentRefId } = useParams();
  const { refs } = useChildRefs(parentRefId);

  // Return the child refs in order.
  const childRefs = yallist.create(refs);

  console.log(refs);

  return (
    <Flex
      sx={{ width: "100vw", alignItems: "center", flexDirection: "column" }}
    >
      <RefNew />
      {childRefs.map((ref) => (
        <Ref
          key={ref._id}
          isSelected={ref._id === selectedRefId}
          onRefClick={() =>
            setSelectedRefId(selectedRefId === ref._id || ref._id)
          }
          {...ref}
        />
      ))}
      <RefNew />
    </Flex>
  );
};

export default RefStory;
