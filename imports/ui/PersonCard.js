import { Flex, Heading, Text } from "theme-ui";
import { isReady } from "../utils/helpers";
import { useAccount } from "../utils/hooks";
import PropTypes from "prop-types";
import React from "react";

const PersonCard = (props) => (
  <Flex
    sx={{
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Flex
      sx={{
        variant: "flex.imageWrapper",
        backgroundImage: `url(${props.image})`,
      }}
    />
    {
      <Flex sx={{ mr: 3, flexGrow: 2, flexDirection: "column" }}>
        <Heading>{props.title}</Heading>
        <Text sx={{ color: "textSecondary" }}>{props.subtitle}</Text>
      </Flex>
    }
  </Flex>
);

PersonCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default PersonCard;
