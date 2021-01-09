import { Card, Box, Flex, useColorMode, Text, Heading } from "theme-ui";
import { isReady } from "../utils/helpers";
import { refTypeLabels } from "../utils/types";
import { useChildRefs, useAccount } from "../utils/hooks";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import React, { useContext, useEffect, useState } from "react";
import RefView from "./RefView";
import RefNew from "./RefNew";
import RefStoryNav from "./RefStoryNav";
import PersonCard from "./PersonCard";
import Container from "./Container";

const RefStory = () => {
  const { setSelectedRefId } = useContext(AppContext);
  const { parentRefId } = useParams();
  const { user, userId } = useAccount();
  const parentId = parentRefId || userId;

  // Get the refs
  const { refs, parentRef } = useChildRefs(parentId);

  // Set the color mode based on the parent ref type
  const [colorMode, setColorMode] = useColorMode();
  useEffect(() =>
    setColorMode(isReady(parentRef) ? parentRef.type : "default")
  );

  return (
    <Container showHeader>
      <Box mb={4}>
        {parentId === userId
          ? isReady(user) && (
              <Card sx={{ variant: "cards.parent", mx: "auto" }}>
                <PersonCard
                  image={user.services && user.services.google.picture}
                  title={user.profile.name}
                  subtitle="You"
                />
              </Card>
            )
          : isReady(parentRef) && <RefView {...parentRef} isParentRef />}
        {refs.length > 0 &&
          refs.map((ref, index) => {
            const prevRef = index === 0 ? { rank: 0 } : refs[index - 1];
            const newRefRank =
              (parseInt(ref.rank) + parseInt(prevRef.rank)) / 2;

            return (
              <Box key={ref._id}>
                <RefNew rank={newRefRank} parentId={parentId} />
                <RefView {...ref} />
              </Box>
            );
          })}
        <RefNew
          parentId={parentId}
          rank={refs.length + 1}
          shouldBeExpanded={refs.length === 0}
        />
        <RefStoryNav refs={refs} />
      </Box>
    </Container>
  );
};

export default RefStory;
