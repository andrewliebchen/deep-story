import { Button } from "theme-ui";
import { refTypeLabels } from "../utils/types";
import AppContext from "./AppContext";
import capitalize from "capitalize";
import React, { useContext } from "react";

const RefFilter = (props) => {
  const { refFilterIndex, setRefFilterIndex } = useContext(AppContext);

  return (
    <Button
      sx={{ variant: "button.secondary", ml: 2 }}
      onClick={() =>
        setRefFilterIndex(
          refFilterIndex < refTypeLabels.length - 1 ? refFilterIndex + 1 : 0
        )
      }
    >
      {capitalize(refTypeLabels[refFilterIndex])}
    </Button>
  );
};

export default RefFilter;
