import { IconButton } from "theme-ui";
import { useColorMode } from "theme-ui";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import React from "react";
import Sun from "@iconscout/react-unicons/icons/uil-sun";

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <IconButton
      variant="iconButton.floating"
      title="Toggle color mode"
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
    >
      {colorMode === "default" ? <Moon /> : <Sun />}
    </IconButton>
  );
};

export default ColorModeToggle;
