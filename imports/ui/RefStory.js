import { Box, Flex } from "theme-ui";
import { isReady } from "../utils/helpers";
import { useChildRefs } from "../utils/hooks";
import { useKeycodes } from "@accessible/use-keycode";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Ref from "./Ref";
import RefContent from "./RefContent";
import RefNew from "./RefNew";
import RefTextView from "./RefTextView";

const RefStory = () => {
  const [selectedRefId, setSelectedRefId] = useState(false);
  const { parentRefId } = useParams();

  const { refs, parentRef } = useChildRefs(parentRefId);

  // TODO: Fix this...?
  const keycodesListener = useKeycodes({
    // esc
    27: () => setSelectedRefId(false),
    // enter
    13: () => setSelectedRefId(false),
  });

  return (
    <Flex
      ref={keycodesListener}
      sx={{ width: "100vw", alignItems: "center", flexDirection: "column" }}
    >
      {/* Parent ref, if there is one */}
      {isReady(parentRef) && parentRef.type !== "base" && (
        <>
          <Ref {...parentRef} isParentRef />
          <RefNew rank={1} isExpanded />
        </>
      )}
      {/* The child refs */}
      {refs.map((ref, index) => {
        const prevRef = index === 0 ? { rank: 0 } : refs[index - 1];
        const newRefRank = (parseInt(ref.rank) + parseInt(prevRef.rank)) / 2;

        console.log(prevRef.rank, newRefRank);

        return (
          <Box key={ref._id}>
            <RefNew rank={newRefRank} />
            <Ref {...ref} />
          </Box>
        );
      })}
      <RefNew rank={refs.length + 1} />
    </Flex>
  );
};

export default RefStory;
