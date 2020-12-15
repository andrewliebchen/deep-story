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
      {/* Parent ref */}
      {isReady(parentRef) && parentRef.type !== "base" && (
        <RefContent {...parentRef} />
      )}
      {refs.map((ref, index) => {
        const prevRef = refs[index - 1];
        const newRefRank = (ref.rank + (prevRef ? prevRef.rank : 0)) / 2;

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
