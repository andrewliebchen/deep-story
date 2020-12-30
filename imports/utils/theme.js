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
  border: 0,
  color: "primary",
  cursor: "pointer",
  display: "flex",
  height: controlHeight,
  justifyContent: "center",
  minWidth: controlHeight,
  p: 2,
  textDecoration: "none",
  userSelect: "none",
  flexShrink: 0,
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
    secondary: {
      ...controlBase,
      fontWeight: "bold",
    },
    primary: {
      ...controlBase,
      bg: "primary",
      color: "background",
      fontWeight: "bold",
      "&:hover": {
        bg: "primaryHover",
      },
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
    muted: "rgba(0, 0, 0, 0.03)",
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
    textPlaceholder: "rgba(0, 0, 0, 0.3)",
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
  fontSizes: [14, 16, 18, 24],
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
      minHeight: controlHeight * 2,
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
    avatar: controlHeight,
    control: controlHeight,
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
  },
  text: {
    heading: {
      fontSize: 2,
    },
    parentHeading: {
      fontSize: 3,
    },
    label: {
      fontWeight: "bold",
      fontFamily: "monospace",
    },
    edit: {
      fontFamily: "monospace",
      overflow: "hidden",
      flex: "1 1",
    },
  },
};
