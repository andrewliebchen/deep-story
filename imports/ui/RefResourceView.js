import { Card, Flex, Text, Box, Button, Link } from "theme-ui";
import { UilBrowser } from "@iconscout/react-unicons";
import React from "react";

const RefResourceView = (props) => (
  <Card sx={{ alignItems: "center" }}>
    <Flex
      sx={{
        variant: "flex.imageWrapper",
        backgroundImage: `url(${props.data.img})`,
      }}
    />
    <Box sx={{ mr: 3 }}>
      <Text sx={{ fontWeight: "bold" }}>{props.data.title}</Text>
      <Text sx={{ color: "textSecondary" }}>{props.data.description}</Text>
    </Box>
    <Link href={props.resourceUrl} target="_blank">
      <Button sx={{ variant: "button.background" }} title="Open resource">
        <UilBrowser />
      </Button>
    </Link>
  </Card>
);

export default RefResourceView;
