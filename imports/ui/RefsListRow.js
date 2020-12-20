import { Box, Flex, Text } from "theme-ui";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import TimeAgo from "react-timeago";
import UilFile from "@iconscout/react-unicons/icons/uil-file";

const RefsListRow = (props) => {
  const rowContent = (
    <Flex
      sx={{
        borderRadius: 2,
        cursor: "pointer",
        justifyContent: "space-between",
        p: 3,
        "&:hover": { bg: "muted" },
      }}
    >
      <Flex sx={{ alignItems: "center" }}>
        <Box sx={{ variant: "iconButton.primary", mr: 2 }}>
          <UilFile />
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

  return (
    <>
      {props.navigate ? (
        <Link
          to={`/refs/${props._id}`}
          onClick={() => props.onClick(props._id)}
        >
          {rowContent}
        </Link>
      ) : (
        <Box onClick={() => props.onClick(props._id)}>{rowContent}</Box>
      )}
    </>
  );
};

RefsListRow.defaultProps = {
  navigate: true,
};

RefsListRow.propTypes = {
  _id: PropTypes.string,
  createdAt: PropTypes.number,
  onClick: PropTypes.func,
  navigate: PropTypes.bool,
};

export default RefsListRow;
