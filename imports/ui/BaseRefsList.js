import { Box, Heading, Flex, Text, useColorMode } from "theme-ui";
import { useBaseRefs } from "../utils/hooks";
import React, { useEffect } from "react";
import RefsListRow from "./RefsListRow";
import Ref from "./Ref";

const BaseRefsList = () => {
  const { refs } = useBaseRefs();
  const [colorMode, setColorMode] = useColorMode();

  useEffect(() => setColorMode("default"));

  return (
    <Flex
      sx={{
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <Box>
        {refs.map((ref) => (
          <Ref key={ref._id} {...ref} />
        ))}
      </Box>
    </Flex>
  );
};

export default BaseRefsList;
