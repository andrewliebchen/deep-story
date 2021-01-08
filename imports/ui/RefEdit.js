import { Box, Flex, Input, useColorMode } from "theme-ui";
import { isReady } from "../utils/helpers";
import { useGetRef } from "../utils/hooks";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import RefLinkEdit from "./RefLinkEdit";
import RefMockEdit from "./RefMockEdit";
import RefResourceEdit from "./RefResourceEdit";
import RefTasksEdit from "./RefTasksEdit";
import RefTextEdit from "./RefTextEdit";
import Toolbar from "./Toolbar";

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
      {isReady(ref) && (
        <Box
          sx={{
            width: "ref",
          }}
        >
          <Input
            defaultValue={ref.title}
            placeholder="Add a title..."
            onChange={(event) =>
              Meteor.call("refs.update", ref._id, {
                title: event.target.value,
              })
            }
            sx={{
              variant: "forms.inputGhosted",
              color: ref.showTitle ? "text" : "textSecondary",
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
      )}
    </Flex>
  );
};

export default RefEdit;
