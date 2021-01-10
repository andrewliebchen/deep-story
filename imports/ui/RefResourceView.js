import { Card, Flex, Text, Box, Button, Link, Image } from "theme-ui";
import { ExternalLink } from "react-feather";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { isReady } from "../utils/helpers";
import { useGetResource } from "../utils/hooks";
import AppContext from "./AppContext";

const RefResourceView = (props) => {
  const { setSelectedRefId } = useContext(AppContext);
  const resource = useGetResource({ parentId: props._id });

  return isReady(resource) && isReady(resource.data) ? (
    <Box>
      <Flex sx={{ justifyContent: "center" }}>
        <Image src={resource.data.img} sx={{ borderRadius: 3 }} />
      </Flex>
      <Box sx={{ mt: 3 }}>
        <Link href={resource.url} target="_blank" sx={{ fontWeight: "bold" }}>
          {resource.data.title}
        </Link>
        <Text sx={{ color: "textSecondary" }}>{resource.data.description}</Text>
      </Box>
    </Box>
  ) : (
    <Flex sx={{ justifyContent: "center" }}>
      <Text sx={{ color: "textSecondary" }}>Generating preview</Text>
    </Flex>
  );
};

RefResourceView.propTypes = {
  _id: PropTypes.string,
};

export default RefResourceView;
