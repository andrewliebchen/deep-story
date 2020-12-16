import { IconButton } from "theme-ui";
import { useColorMode } from "theme-ui";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import React from "react";
import Sun from "@iconscout/react-unicons/icons/uil-sun";

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isLightMode = colorMode === "default";

  return (
    <IconButton
      variant="iconButton.default"
      title="Toggle color mode"
      onClick={() => setColorMode(isLightMode ? "dark" : "default")}
      title={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isLightMode ? <Moon /> : <Sun />}
    </IconButton>
  );
};

export default ColorModeToggle;
