import { refTypes } from "./types";
import Color from "color";

let refTypeColorModes = {};
Object.keys(refTypes).map((type) => {
  refTypeColor = Color(refTypes[type].color);
  refTypeColorModes[type] = {
    primary: refTypeColor.toString(),
    primaryBackground: refTypeColor.alpha(0.2).rgb().toString(),
    primaryHover: refTypeColor.darken(0.1).rgb().toString(),
    primaryMuted: refTypeColor.alpha(0.1).rgb().toString(),
  };
});

const controlBase = {
  alignItems: "center",
  bg: "primaryMuted",
  border: 0,
  borderRadius: 3,
  color: "primary",
  cursor: "pointer",
  display: "flex",
  flexShrink: 0,
  height: "control",
  justifyContent: "center",
  minWidth: "control",
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

export default {
  button: {
    primary: {
      ...controlBase,
      bg: "primary",
      color: "background",
      fontWeight: "bold",
      "&:hover": {
        bg: "primaryHover",
      },
    },
    secondary: {
      ...controlBase,
      fontWeight: "bold",
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
      color: "negative",
      bg: "negativeMuted",
      "&:hover": {
        bg: "negativeBackground",
      },
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
      bg: "muted",
      borderRadius: 4,
      display: "flex",
      flexDirection: "rows",
      justifyContent: "space-between",
      mx: -3,
      padding: 3,
    },
  },
  colors: {
    background: "rgba(255, 255, 255, 1)",
    modes: refTypeColorModes,
    muted: "rgba(0, 0, 0, 0.03)",
    negative: "rgba(230, 59, 24, 1)",
    negativeBackground: "rgba(230, 59, 24, 0.2)",
    negativeMuted: "rgba(230, 59, 24, 0.03)",
    positive: "rgba(19, 201, 141, 1)",
    positiveBackground: "rgba(19, 201, 141, 0.2)",
    positiveHover: "rgba(14, 177, 123, 1)",
    positiveMuted: "rgba(19, 201, 141, 0.03)",
    primary: refTypeColorModes.text.primary,
    primaryBackground: refTypeColorModes.text.primaryBackground,
    primaryHover: refTypeColorModes.text.primaryHover,
    primaryMuted: refTypeColorModes.text.primaryMuted,
    secondary: "rgba(123, 97, 255, 1)",
    text: "rgba(0, 0, 0, 1)",
    textPlaceholder: "rgba(0, 0, 0, 0.3)",
    textSecondary: "rgba(0, 0, 0, 0.5)",
  },
  flex: {
    ref: {
      flexDirection: "column",
      width: "ref",
    },
    wrapper: {
      width: "100vw",
      position: "relative",
      px: 3,
      justifyContent: "center",
      alignItems: "center",
    },
    parentWrapper: {
      width: "100vw",
      position: "relative",
      px: 3,
      pb: 5,
      pt: 3,
      justifyContent: "center",
      alignItems: "center",
      bg: "primaryMuted",
    },
    parent: {
      bg: "transparent",
      my: 3,
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
      height: "control",
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
      zIndex: 4,
      alignItems: "center",
      justifyContent: "center",
    },
    task: {
      alignItems: "center",
      p: 2,
      mx: -2,
      borderRadius: 20,
      "&:hover": {
        bg: "muted",
      },
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [14, 16, 18, 28],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  images: {
    avatar: {
      ...controlBase,
      size: "avatar",
      p: 0,
    },
  },
  forms: {
    input: {
      ...controlBase,
      fontFamily: "monospace",
      bg: "muted",
      color: "text",
      flexShrink: 1,
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
    inputGhosted: {
      ...invisibleInputBase,
      display: "flex",
      flex: 1,
      width: "auto",
      minHeight: 24,
      "&:focus": {
        bg: "transparent",
        outline: "0",
      },
    },
    label: {
      fontWeight: "bold",
      fontSize: 0,
      mb: 2,
      px: 2,
    },
    textarea: {
      ...invisibleInputBase,
      resize: "none",
      fontSize: 1,
      minHeight: 80,
      lineHeight: "body",
    },
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
    avatar: 40,
    control: 40,
    image: 80,
    ref: 600,
  },
  space: [0, 4, 8, 16, 32, 40],
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    progress: {
      bg: "background",
      color: "primary",
      height: 8,
    },
    a: {
      textDecoration: "none",
    },
    p: {
      m: 0,
      "& + p": {
        mt: 3,
      },
    },
  },
  text: {
    heading: {
      fontSize: 2,
    },
    label: {
      fontFamily: "monospace",
      fontWeight: "bold",
    },
    edit: {
      flex: "1 1",
      fontFamily: "monospace",
      overflow: "hidden",
    },
  },
};
