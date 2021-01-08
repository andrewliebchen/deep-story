import React, { useEffect } from "react";
import { isReady } from "../utils/helpers";
import { Box, Flex, Input, useColorMode } from "theme-ui";
import Toolbar from "./Toolbar";
import RefLinkEdit from "./RefLinkEdit";
import RefMockEdit from "./RefMockEdit";
import RefResourceEdit from "./RefResourceEdit";
import RefTasksEdit from "./RefTasksEdit";
import RefTextEdit from "./RefTextEdit";
import { useParams } from "react-router-dom";
import { useGetRef } from "../utils/hooks";

const RefContent = (ref) => {
  switch (ref.type) {
    case "link":
      return <RefLinkEdit {...ref} />;
      break;
    case "mock":
      return <RefMockEdit {...ref} />;
      break;
    case "resource":
      return <RefResourceEdit {...ref} />;
      break;
    case "tasks":
      return <RefTasksEdit {...ref} />;
      break;
    default:
      return <RefTextEdit {...ref} />;
  }
};

const RefEdit = (props) => {
  const { refId } = useParams();
  const ref = useGetRef(refId);

  // Set the color mode based on the parent ref type
  const [colorMode, setColorMode] = useColorMode();
  useEffect(() => setColorMode(isReady(ref) ? ref.type : "default"));

  return (
    <Flex
      sx={{
        bg: "background",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <Toolbar {...ref} />
      <Box
        sx={{
          width: "ref",
        }}
      >
        <Input
          defaultValue={props.title}
          placeholder="Add a title..."
          onChange={(event) =>
            Meteor.call("refs.update", props._id, {
              title: event.target.value,
            })
          }
          sx={{
            variant: "forms.inputGhosted",
            color: props.showTitle ? "text" : "textSecondary",
            fontWeight: "bold",
            fontSize: 2,
            mb: 3,
            width: "100%",
            "&::placeholder": {
              fontWeight: "normal",
            },
          }}
        />
        <RefContent {...ref} />
      </Box>
    </Flex>
  );
};

export default RefEdit;
