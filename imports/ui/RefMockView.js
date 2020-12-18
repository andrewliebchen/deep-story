import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Label,
  Text,
} from "theme-ui";
import { mockTypes } from "../utils/types";
import AppContext from "./AppContext";
import capitalize from "capitalize";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import UilArrowDown from "@iconscout/react-unicons/icons/uil-arrow-down";
import UilCopy from "@iconscout/react-unicons/icons/uil-copy";
import ultralightCopy from "copy-to-clipboard-ultralight";

const imageSize = 120;

const RefMockView = (props) => {
  const { setToastMessage } = useContext(AppContext);

  return (
    <Box variant="flex.ref">
      {props.title && <Heading mb={3}>{props.title}</Heading>}
      {props.data && (
        <Flex
          sx={{
            alignItems: "center",
            border: "3px solid",
            borderColor: "muted",
            p: 3,
            borderRadius: 2,
          }}
        >
          {props.data.image && (
            <Avatar
              src={props.data.image}
              sx={{ height: imageSize, width: imageSize, mr: 3 }}
            />
          )}
          <Flex sx={{ flexDirection: "column", flexGrow: 2, m: -1 }}>
            {props.nickname && <Heading>{props.nickname}</Heading>}
            {Object.keys(props.data).map(
              (key) =>
                key !== "image" && (
                  <Flex key={key} sx={{ alignItems: "center", m: 1 }}>
                    <Box>
                      <Label>{capitalize(key)}</Label>
                      <Text>{props.data[key]}</Text>
                    </Box>
                    <IconButton
                      children={<UilCopy />}
                      sx={{ variant: "iconButton.default", ml: "auto" }}
                      onClick={() => {
                        ultralightCopy(props.data[key]);
                        setToastMessage("Copied to clipboard");
                      }}
                    />
                  </Flex>
                )
            )}
          </Flex>
        </Flex>
      )}
      {/* <Button sx={{ variant: "button.default", mt: 3, width: "100%" }}>
      <UilArrowDown />
      <Text ml={2}>See all parameters</Text>
    </Button> */}
    </Box>
  );
};

export default RefMockView;
