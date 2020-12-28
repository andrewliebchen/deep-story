import React, { useState } from "react";
import { Box, Flex, Text, Input, IconButton } from "theme-ui";
import TitleEdit from "./TitleEdit";
import PropTypes from "prop-types";
import TasksList from "./TasksList";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import { useKeycodes } from "@accessible/use-keycode";

const RefTasksEdit = (props) => {
  const [value, setValue] = useState("");

  // Listen for keycodesListener
  const keycodesListener = useKeycodes({
    // esc
    13: () => {
      Meteor.call(
        "tasks.insert",
        props._id,
        value,
        (error, success) => success && setValue("")
      );
    },
  });

  return (
    <Box ref={keycodesListener}>
      <TitleEdit {...props} />
      <Flex sx={{ variant: "flex.ref", mt: 2 }}>
        <Flex>
          <Input
            sx={{ variant: "input.default", mr: 2 }}
            placeholder="Add a task and press enter"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </Flex>
        <TasksList parentId={props._id} />
      </Flex>
    </Box>
  );
};

RefTasksEdit.propTypes = {
  _id: PropTypes.string,
};

export default RefTasksEdit;
