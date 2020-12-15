import { Box, Flex } from "theme-ui";
import { useChildRefs, useRef } from "../utils/hooks";
import { useParams } from "react-router-dom";
import { useKeycodes } from "@accessible/use-keycode";
import React, { useState } from "react";
import Ref from "./Ref";
import RefNew from "./RefNew";
import RefTextView from "./RefTextView";
import RefContent from "./RefContent";
import { isReady } from "../utils/helpers";

const RefStory = () => {
  const [selectedRefId, setSelectedRefId] = useState(false);
  const { parentRefId } = useParams();

  const { refs, parentRef } = useChildRefs(parentRefId);

  console.log(parentRef);

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
      {isReady(parentRef) && <RefContent {...parentRef} />}
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
