import { Card, Box } from "theme-ui";
import { isReady } from "../utils/helpers";
import { useChildRefs, useAccount } from "../utils/hooks";
import { useParams } from "react-router-dom";
import Container from "./Container";
import PersonCard from "./PersonCard";
import React from "react";
import RefNew from "./RefNew";
import RefStoryNav from "./RefStoryNav";
import RefView from "./RefView";

const RefStory = () => {
  const { parentRefId } = useParams();
  const { user, userId } = useAccount();
  const parentId = parentRefId || userId;

  const { refs, parentRef } = useChildRefs(parentId);

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
              (parseInt(ref.rank) +
                parseInt(prevRef.rank === 0 ? -1 : prevRef.rank)) /
              2;

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
