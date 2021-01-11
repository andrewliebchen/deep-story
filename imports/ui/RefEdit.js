import { Button, Box, Input, Flex, useColorMode } from "theme-ui";
import { isReady } from "../utils/helpers";
import { useGetRef } from "../utils/hooks";
import { useParams } from "react-router-dom";
import Container from "./Container";
import React, { useEffect } from "react";
import RefLinkEdit from "./RefLinkEdit";
import RefMockEdit from "./RefMockEdit";
import RefResourceEdit from "./RefResourceEdit";
import RefTasksEdit from "./RefTasksEdit";
import RefTextEdit from "./RefTextEdit";
import Toolbar from "./Toolbar";
import { Eye, EyeOff } from "react-feather";

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
    isReady(ref) && (
      <Container header={<Toolbar {...ref} />}>
        <Box
          sx={{
            width: "ref",
          }}
        >
          <Flex sx={{ alignItems: "center", mb: 3 }}>
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
                fontSize: 2,
                fontWeight: "bold",
                width: "100%",
                "&::placeholder": {
                  fontWeight: "normal",
                },
              }}
            />
            <Button
              sx={{ variant: "button.secondary" }}
              children={props.showTitle ? <Eye /> : <EyeOff />}
              onClick={() =>
                Meteor.call("refs.update", props._id, {
                  showTitle: !props.showTitle,
                })
              }
              title={props.showTitle ? "Hide ref title" : "Show ref title"}
            />
          </Flex>
          <RefContent {...ref} />
        </Box>
      </Container>
    )
  );
};

export default RefEdit;
