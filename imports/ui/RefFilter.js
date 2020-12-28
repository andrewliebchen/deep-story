import React, { useContext } from "react";
import { Button } from "theme-ui";
import { refTypes } from "../utils/types";
import AppContext from "./AppContext";
import capitalize from "capitalize";

const types = ["all", ...Object.keys(refTypes)];
const RefFilter = (props) => {
  const { refFilterIndex, setRefFilterIndex } = useContext(AppContext);

  return (
    <Button
      sx={{ variant: "button.default", ml: 2 }}
      onClick={() =>
        setRefFilterIndex(
          refFilterIndex < types.length - 1 ? refFilterIndex + 1 : 0
        )
      }
    >
      {capitalize(types[refFilterIndex])}
    </Button>
  );
};

export default RefFilter;
