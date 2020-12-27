import { refTypes } from "./types";
import Color from "color";

let refTypeColorModes = {};
Object.keys(refTypes).map((type) => {
  refTypeColor = Color(refTypes[type].color);
  refTypeColorModes[type] = {
    primary: refTypeColor.toString(),
    primaryHover: refTypeColor.darken(0.1).rgb().toString(),
    primaryBackground: refTypeColor.alpha(0.2).rgb().toString(),
    primaryMuted: refTypeColor.alpha(0.1).rgb().toString(),
  };
});

export const controlHeight = 40;

const controlBase = {
  alignItems: "center",
  bg: "primaryMuted",
  borderRadius: 3,
  color: "primary",
  cursor: "pointer",
  display: "flex",
  height: controlHeight,
  justifyContent: "center",
  minWidth: controlHeight,
  px: 3,
  py: 2,
  textDecoration: "none",
  "&:hover": {
    bg: "primaryBackground",
  },
  "&:disabled": {
    color: "primaryBackground",
    cursor: "not-allowed",
    "&:hover": {
      bg: "background",
    },
  },
};

const buttonPrimaryStyles = {
  bg: "primary",
  color: "background",
  fontWeight: "bold",
  "&:hover": {
    bg: "primaryHover",
  },
};

const buttonNegativeStyles = {
  color: "negative",
  bg: "negativeMuted",
  "&:hover": {
    bg: "negativeBackground",
  },
};

const iconButtonBase = {
  p: 0,
};

const invisibleInputBase = {
  bg: "transparent",
  border: 0,
  borderRadius: 0,
  caretColor: "primary",
  fontFamily: "monospace",
  minWidth: "auto",
  p: 0,
  whiteSpace: "pre-wrap",
  "&:focus": {
    outline: "none",
  },
};

const flexRefBase = {
  p: 3,
  bg: "background",
  borderRadius: 3,
  width: "ref",
  mx: "auto",
  flexDirection: "column",
};

export default {
  button: {
    default: {
      ...controlBase,
    },
    primary: {
      ...controlBase,
      ...buttonPrimaryStyles,
    },
    negative: {
      ...controlBase,
      ...buttonNegativeStyles,
    },
  },
  colors: {
    primary: refTypeColorModes.text.primary,
    primaryHover: refTypeColorModes.text.primaryHover,
    primaryBackground: refTypeColorModes.text.primaryBackground,
    primaryMuted: refTypeColorModes.text.primaryMuted,
    background: "rgba(255, 255, 255, 1)",
    muted: "rgba(0, 0, 0, 0.05)",
    negative: "rgba(230, 59, 24, 1)",
    negativeBackground: "rgba(230, 59, 24, 0.2)",
    negativeMuted: "rgba(230, 59, 24, 0.03)",
    positive: "rgba(19, 201, 141, 1)",
    positiveHover: "rgba(14, 177, 123, 1)",
    secondary: "rgba(123, 97, 255, 1)",
    text: "rgba(0, 0, 0, 1)",
    textSecondary: "rgba(0, 0, 0, 0.5)",
    modes: refTypeColorModes,
  },
  flex: {
    ref: {
      ...flexRefBase,
    },
    parent: {
      ...flexRefBase,
      bg: "transparent",
      my: 3,
    },
    refNew: {
      width: "100vw",
      alignItems: "center",
      px: 3,
      justifyContent: "flex-end",
      cursor: "pointer",
      position: "relative",
      height: 8,
      "&:hover": {
        bg: "primaryMuted",
        zIndex: 1,
      },
    },
    refWrapper: {
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      position: "relative",
      px: 3,
      py: 2,
    },
    refRightButtons: {
      position: "absolute",
      right: 3,
      width: 36,
      justifyContent: "flex-end",
    },
    refLeftButtons: {
      position: "absolute",
      left: 3,
      width: 36,
    },
    toast: {
      color: "background",
      bg: "positive",
      height: controlHeight,
      alignItems: "center",
      px: 3,
      borderRadius: 3,
      fontWeight: "bold",
    },
    overlayBackground: {
      bg: "rgba(255, 255, 255, 0.9)",
      height: "100vh",
      left: 0,
      position: "fixed",
      top: 0,
      width: "100vw",
      zIndex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [14, 16, 18, 24],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  heading: {
    fontSize: 2,
    mb: 2,
  },
  iconButton: {
    default: {
      ...controlBase,
      ...iconButtonBase,
    },
    primary: {
      ...controlBase,
      ...buttonPrimaryStyles,
      ...iconButtonBase,
    },
    background: {
      ...controlBase,
      ...iconButtonBase,
      bg: "background",
    },
    backgroundNegative: {
      ...controlBase,
      ...iconButtonBase,
      bg: "background",
      color: "negative",
      "&:hover": {
        bg: "negativeBackground",
      },
    },
    negative: {
      ...controlBase,
      ...buttonNegativeStyles,
      ...iconButtonBase,
    },
    positive: {
      ...controlBase,
      ...iconButtonBase,
      bg: "positive",
      color: "background",
      "&:hover": { bg: "positiveHover" },
    },
  },
  input: {
    default: {
      ...controlBase,
      bg: "muted",
      border: 0,
      textAlign: "center",
      color: "text",
      "&:hover": {
        color: "text",
      },
      "&:disabled": {
        color: "textSecondary",
        cursor: "not-allowed",
      },
      "&:focus": {
        bg: "background",
      },
    },
    inline: {
      ...invisibleInputBase,
      display: "flex",
      flex: 1,
      width: "auto",
      minHeight: 24,
    },
  },
  label: {
    fontWeight: "bold",
    fontSize: 0,
    maxWidth: 100,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  radii: [0, 4, 8, 12, 20, 28],
  select: {
    default: {
      ...controlBase,
      border: 0,
    },
  },
  shadows: {
    overlay: "0 8px 16px rgba(0, 0, 0, 0.1)",
  },
  sizes: {
    ref: 600,
  },
  space: [0, 4, 8, 16, 32, 40],
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
  },
  text: {
    default: {
      "& a": {
        fontWeight: "bold",
        bg: "primaryMuted",
        p: 1,
        m: -1,
        borderRadius: 1,
        color: "primary",
        "&:visited": {
          color: "primary",
        },
        "&:hover": {
          bg: "primaryBackground",
          color: "primaryHover",
        },
      },
    },
  },
  textarea: {
    ref: {
      ...invisibleInputBase,
      ...flexRefBase,
      resize: "none",
      fontSize: 1,
      minHeight: controlHeight * 2,
    },
  },
};
