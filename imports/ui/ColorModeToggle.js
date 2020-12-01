import React, { useContext } from "react";
import { IconButton } from "theme-ui";
import AppContext from "./AppContext";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";

const ColorModeToggle = () => {
  const { colorMode, setColorMode } = useContext(AppContext);

  return (
    <IconButton
      variant="iconButton.default"
      title="Toggle color mode"
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
    >
      {colorMode === "default" ? <Moon /> : <Sun />}
    </IconButton>
  );
};

export default ColorModeToggle;
