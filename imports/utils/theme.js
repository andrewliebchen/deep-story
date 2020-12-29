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
  p: 2,
  textDecoration: "none",
  userSelect: "none",
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

const flexRefBase = {};

export default {
  button: {
    secondary: {
      ...controlBase,
    },
    primary: {
      ...controlBase,
      ...buttonPrimaryStyles,
    },
    background: {
      ...controlBase,
      bg: "background",
    },
    backgroundNegative: {
      ...controlBase,
      bg: "background",
      color: "negative",
      "&:hover": {
        bg: "negativeBackground",
      },
    },
    negative: {
      ...controlBase,
      ...buttonNegativeStyles,
    },
    positive: {
      ...controlBase,
      bg: "positive",
      color: "background",
      "&:hover": { bg: "positiveHover" },
    },
    transparent: {
      ...controlBase,
      bg: "transparent",
    },
  },
  cards: {
    primary: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "rows",
      padding: 3,
      bg: "muted",
      borderRadius: 4,
      mx: -3,
    },
  },
  colors: {
    primary: refTypeColorModes.text.primary,
    primaryHover: refTypeColorModes.text.primaryHover,
    primaryBackground: refTypeColorModes.text.primaryBackground,
    primaryMuted: refTypeColorModes.text.primaryMuted,
    background: "rgba(255, 255, 255, 1)",
    muted: "rgba(0, 0, 0, 0.02)",
    negative: "rgba(230, 59, 24, 1)",
    negativeBackground: "rgba(230, 59, 24, 0.2)",
    negativeMuted: "rgba(230, 59, 24, 0.03)",
    positive: "rgba(19, 201, 141, 1)",
    positiveBackground: "rgba(19, 201, 141, 0.2)",
    positiveMuted: "rgba(19, 201, 141, 0.03)",
    positiveHover: "rgba(14, 177, 123, 1)",
    secondary: "rgba(123, 97, 255, 1)",
    text: "rgba(0, 0, 0, 1)",
    textSecondary: "rgba(0, 0, 0, 0.5)",
    modes: refTypeColorModes,
  },
  flex: {
    ref: {
      width: "ref",
      flexDirection: "column",
    },
    wrapper: {
      width: "100vw",
      position: "relative",
      px: 3,
      justifyContent: "center",
      alignItems: "center",
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
      minheight: 16,
      "&:hover": {
        bg: "primaryMuted",
      },
    },
    refActions: {
      position: "absolute",
      right: 3,
    },
    imageWrapper: {
      backgroundColor: "muted",
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderRadius: 2,
      mr: 3,
      overflow: "hidden",
      size: "image",
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
    mr: 2,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  radii: [0, 4, 8, 12, 28],
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
    control: controlHeight,
    image: 80,
    avatar: controlHeight,
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
  progress: {
    default: {
      bg: "muted",
      color: "primaryBackground",
    },
  },
};
