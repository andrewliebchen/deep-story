import { Flex, Text, Box, Link, Image } from "theme-ui";
import { isReady } from "../utils/helpers";
import { useGetResource } from "../utils/hooks";
import PropTypes from "prop-types";
import React from "react";

const RefResourceView = (props) => {
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
