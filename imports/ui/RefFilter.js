import { Button, Text } from "theme-ui";
import { refTypeLabels } from "../utils/types";
import AppContext from "./AppContext";
import capitalize from "capitalize";
import React, { useContext } from "react";
import { Filter } from "react-feather";

const RefFilter = (props) => {
  const { refFilterIndex, setRefFilterIndex } = useContext(AppContext);

  return (
    <Button
      sx={{ variant: "button.secondary" }}
      onClick={() =>
        setRefFilterIndex(
          refFilterIndex < refTypeLabels.length - 1 ? refFilterIndex + 1 : 0
        )
      }
    >
      <Filter />
      <Text ml={1}>{capitalize(refTypeLabels[refFilterIndex])}</Text>
    </Button>
  );
};

export default RefFilter;
