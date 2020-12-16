import { Flex, Box, Text, IconButton } from "theme-ui";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import TimeAgo from "react-timeago";
import UilArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right";
import UilFile from "@iconscout/react-unicons/icons/uil-file";

const RefsListRow = (props) => {
  const history = useHistory();

  return (
    <Flex
      key={props._id}
      onClick={() => history.push(`/refs/${props._id}`)}
      sx={{
        cursor: "pointer",
        width: "ref",
        p: 3,
        borderRadius: 2,
        justifyContent: "space-between",
        "&:hover": { bg: "muted" },
      }}
    >
      <Flex sx={{ alignItems: "center" }}>
        <Box sx={{ variant: "iconButton.primary", mr: 2 }}>
          <UilFile />
        </Box>
        <Text sx={{ variant: "text.default", fontWeight: "bold" }}>
          {props._id}
        </Text>
      </Flex>
      <Flex sx={{ alignItems: "center" }}>
        <Text sx={{ variant: "text.default", color: "textSecondary", mr: 2 }}>
          Created <TimeAgo date={props.createdAt} />
        </Text>
        <IconButton
          sx={{ variant: "iconButton.default" }}
          children={<UilArrowRight />}
        />
      </Flex>
    </Flex>
  );
};

RefsListRow.propTypes = {
  _id: PropTypes.string,
  createdAt: PropTypes.number,
};

export default RefsListRow;
