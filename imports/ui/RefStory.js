import { Box, Flex } from "theme-ui";
import { useChildRefs } from "../utils/hooks";
import { useParams } from "react-router-dom";
import { useKeycodes } from "@accessible/use-keycode";
import React, { useState } from "react";
import Ref from "./Ref";
import RefNew from "./RefNew";

const RefStory = () => {
  const [selectedRefId, setSelectedRefId] = useState(false);
  const { parentRefId } = useParams();
  const { refs } = useChildRefs(parentRefId);

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
