import { Flex } from "theme-ui";
import { useGetMocks } from "../utils/hooks";
import PersonCard from "./PersonCard";
import PropTypes from "prop-types";
import React from "react";

const RefMockView = (props) => {
  const mocks = useGetMocks({ parentId: props._id });

  return (
    <Flex sx={{ flexDirection: "column" }}>
      {mocks.length > 0 &&
        mocks.map((mock) => (
          <PersonCard
            key={mock._id}
            image={mock.data.image}
            title={mock.data.name || mock.data.title}
            subtitle="Person"
          />
        ))}
    </Flex>
  );
};

RefMockView.propTypes = {
  _id: PropTypes.string,
};

export default RefMockView;
