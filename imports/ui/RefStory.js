import { Box, Flex } from "theme-ui";
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

  // Use rank to order

  return (
    <Flex
      sx={{ width: "100vw", alignItems: "center", flexDirection: "column" }}
    >
      {refs.map((ref) => (
        <Box key={ref._id}>
          <RefNew rank={0} />
          {/* Rank is average of this ref's length and previous ref's length */}
          <Ref
            isSelected={ref._id === selectedRefId}
            onRefClick={() =>
              setSelectedRefId(selectedRefId === ref._id || ref._id)
            }
            {...ref}
          />
        </Box>
      ))}
      <RefNew rank={refs.length + 1} />
    </Flex>
  );
};

export default RefStory;
