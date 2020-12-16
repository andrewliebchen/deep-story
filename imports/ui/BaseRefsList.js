import { Box, Flex, Text } from "theme-ui";
import { useBaseRefs } from "../utils/hooks";
import React from "react";
import RefsListRow from "./RefsListRow";

const BaseRefsList = () => {
  const { refs } = useBaseRefs();

  return (
    <Flex
      sx={{
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <Box>
        {refs.map((ref) => (
          <RefsListRow key={ref._id} {...ref} />
        ))}
      </Box>
    </Flex>
  );
};

export default BaseRefsList;
