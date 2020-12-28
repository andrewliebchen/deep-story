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
      <Flex sx={{ variant: "flex.ref", mt: 2, p: 0 }}>
        <Flex sx={{ m: 3 }}>
          <Input
            sx={{ variant: "input.default" }}
            placeholder="Add a task and press enter"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </Flex>
        <Box sx={{ mx: 3, mb: 3 }}>
          <TasksList parentId={props._id} />
        </Box>
      </Flex>
    </Box>
  );
};

RefTasksEdit.propTypes = {
  _id: PropTypes.string,
};

export default RefTasksEdit;
