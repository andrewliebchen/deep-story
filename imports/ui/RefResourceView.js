import { Flex, Text, Heading, Link, Image, Box } from "theme-ui";
import React from "react";

const RefResourceView = (props) => (
  <Flex sx={{ variant: "flex.ref" }}>
    {props.title && props.showTitle && <Heading mb={3}>{props.title}</Heading>}
    <Link
      href={props.resourceUrl}
      sx={{ color: "text" }}
      target="_blank"
      title="Open link in a new tab"
    >
      <Flex
        sx={{
          overflow: "hidden",
          p: 0,
          bg: "muted",
          flexDirection: "column",
          borderRadius: 2,
          "&:hover": {
            bg: "primaryMuted",
          },
        }}
      >
        <Image src={props.data.img} />
        <Box p={3}>
          <Heading sx={{ mb: props.data.description ? 1 : 0 }}>
            {props.data.title}
          </Heading>
          <Text>{props.data.description}</Text>
        </Box>
      </Flex>
    </Link>
  </Flex>
);

export default RefResourceView;
