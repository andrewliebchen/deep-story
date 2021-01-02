import { Box, Flex, useColorMode } from "theme-ui";
import { isReady } from "../utils/helpers";
import { refTypeLabels } from "../utils/types";
import { useChildRefs, useAccount } from "../utils/hooks";
import { useKeycodes } from "@accessible/use-keycode";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import React, { useContext, useEffect } from "react";
import Ref from "./Ref";
import RefNew from "./RefNew";

const RefStory = () => {
  const { setSelectedRefId, refFilterIndex } = useContext(AppContext);
  const { parentRefId } = useParams();
  const { userId } = useAccount();

  // Get the refs
  const { refs, parentRef } = useChildRefs(parentRefId || userId);

  // Set the color mode based on the parent ref type
  const [colorMode, setColorMode] = useColorMode();
  useEffect(() =>
    setColorMode(isReady(parentRef) ? parentRef.type : "default")
  );

  // Listen for keycodesListener
  const keycodesListener = useKeycodes({
    // esc
    27: () => setSelectedRefId(false),
  });

  const noRefs = refs.length === 0;

  return (
    <Flex
      ref={keycodesListener}
      sx={{
        minHeight: "100vh",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: noRefs && "center",
      }}
    >
      {parentRef && <Ref {...parentRef} isParentRef />}
      <Box sx={{ my: 2 }}>
        {refs
          .filter(
            (ref) =>
              refFilterIndex === 0 || ref.type === refTypeLabels[refFilterIndex]
          )
          .map((ref, index) => {
            const prevRef = index === 0 ? { rank: 0 } : refs[index - 1];
            const newRefRank =
              (parseInt(ref.rank) + parseInt(prevRef.rank)) / 2;

            return (
              <Box key={ref._id}>
                <RefNew rank={newRefRank} />
                <Ref {...ref} />
              </Box>
            );
          })}
        <RefNew rank={refs.length + 1} isExpanded={noRefs} />
      </Box>
    </Flex>
  );
};

export default RefStory;
