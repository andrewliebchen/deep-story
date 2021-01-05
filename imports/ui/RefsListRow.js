import { Box, Flex, Text } from "theme-ui";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import TimeAgo from "react-timeago";
import { File } from "react-feather";

const RefsListRow = (props) => {
  const history = useHistory();

  return (
    <Flex
      sx={{
        borderRadius: 2,
        cursor: "pointer",
        justifyContent: "space-between",
        p: 3,
        mx: -3,
        "&:hover": { bg: "muted" },
      }}
      onClick={() => {
        props.selectRef();
        history.push(`/refs/${props._id}`);
      }}
    >
      <Flex sx={{ alignItems: "center" }}>
        <Box sx={{ variant: "button.primary", mr: 2 }}>
          <File />
        </Box>
        <Text sx={{ variant: "text.default", fontWeight: "bold" }}>
          {props.title}
        </Text>
      </Flex>
      <Flex sx={{ alignItems: "center" }}>
        <Text sx={{ variant: "text.default", color: "textSecondary", mr: 2 }}>
          Created <TimeAgo date={props.createdAt} />
        </Text>
      </Flex>
    </Flex>
  );
};

RefsListRow.defaultProps = {
  navigate: true,
};

RefsListRow.propTypes = {
  _id: PropTypes.string,
  createdAt: PropTypes.number,
  selectRef: PropTypes.func,
};

export default RefsListRow;
