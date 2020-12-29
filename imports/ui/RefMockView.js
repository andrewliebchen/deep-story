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
import AppContext from "./AppContext";
import capitalize from "capitalize";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import TitleView from "./TitleView";
import UilArrowDown from "@iconscout/react-unicons/icons/uil-arrow-down";
import UilCopy from "@iconscout/react-unicons/icons/uil-copy";
import ultralightCopy from "copy-to-clipboard-ultralight";

const imageSize = 120;

const RefMockView = (props) => {
  const { setToastMessage } = useContext(AppContext);
  const mockDataSet = { ...props.data, ...props.customFieldData };

  return (
    <Flex
      sx={{
        variant: props.isParentRef ? "flex.parent" : "flex.ref",
        border: "3px solid",
        borderColor: "muted",
      }}
    >
      <TitleView {...props} />
      {mockDataSet && (
        <Flex
          sx={{
            alignItems: "center",
          }}
        >
          {mockDataSet.image && (
            <Avatar
              src={mockDataSet.image}
              sx={{ height: imageSize, width: imageSize, mr: 3 }}
            />
          )}
          <Flex sx={{ flexDirection: "column", flexGrow: 2, m: -1 }}>
            {Object.keys(mockDataSet).map(
              (key) =>
                key !== "image" && (
                  <Flex key={key} sx={{ alignItems: "center", m: 1 }}>
                    <Box>
                      <Label>{capitalize(key)}</Label>
                      <Text>{mockDataSet[key]}</Text>
                    </Box>
                    {props.isHovering && (
                      <IconButton
                        children={<UilCopy />}
                        sx={{ variant: "button.secondary", ml: "auto" }}
                        onClick={() => {
                          ultralightCopy(mockDataSet[key]);
                          setToastMessage("Copied to clipboard");
                        }}
                      />
                    )}
                  </Flex>
                )
            )}
          </Flex>
        </Flex>
      )}
      {/* <Button sx={{ variant: "button.secondary", mt: 3, width: "100%" }}>
      <UilArrowDown />
      <Text ml={2}>See all parameters</Text>
    </Button> */}
    </Flex>
  );
};

RefMockView.propTypes = {
  data: PropTypes.object,
  isHovering: PropTypes.bool,
  showTitle: PropTypes.bool,
  title: PropTypes.string,
};

export default RefMockView;
