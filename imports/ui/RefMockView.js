import { Flex } from "theme-ui";
import { isReady } from "../utils/helpers";
import { useGetMock } from "../utils/hooks";
import PersonCard from "./PersonCard";
import PropTypes from "prop-types";
import React from "react";

const RefMockView = (props) => {
  const mock = useGetMock({ parentId: props._id });

  return (
    isReady(mock) &&
    isReady(mock.data) && (
      <Flex sx={{ flexDirection: "column" }}>
        <PersonCard
          key={mock._id}
          image={mock.data.image}
          title={mock.data.name || mock.data.title}
          subtitle="Person"
        />
      </Flex>
    )
  );
};

RefMockView.propTypes = {
  _id: PropTypes.string,
};

export default RefMockView;
