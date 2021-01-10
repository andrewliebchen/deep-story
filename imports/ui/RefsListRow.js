import { Box, Flex, Text } from "theme-ui";
import { File } from "react-feather";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import TimeAgo from "react-timeago";
import { refTypes, refTypeLabels } from "../utils/types";

const RefsListRow = (props) => {
  const history = useHistory();
  const type = refTypes[props.type];

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
        props.selectRef(props._id);
        props.navigate && history.push(`/refs/${props._id}`);
      }}
    >
      <Flex sx={{ alignItems: "center" }}>
        <Flex
          sx={{
            size: "control",
            borderRadius: 3,
            mr: 2,
            alignItems: "center",
            justifyContent: "center",
            bg: type.color,
            color: "background",
          }}
        >
          {type.icon}
        </Flex>
        <Text sx={{ variant: "text.default", fontWeight: "bold" }}>
          {props.title || "Untitled"}
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
  navigate: PropTypes.bool,
  type: PropTypes.oneOf(refTypeLabels),
};

export default RefsListRow;
