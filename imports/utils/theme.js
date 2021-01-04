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
  "&::placeholder": {
    color: "textPlaceholder",
  },
};

const invisibleInputBase = {
  bg: "transparent",
  border: 0,
  borderRadius: 0,
  caretColor: "primary",
  p: 0,
  whiteSpace: "pre-wrap",
  width: "100%",
  fontFamily: "monospace",
  "&:focus": {
    outline: "none",
  },
};

const cardBase = {
  borderRadius: 4,
  display: "flex",
  flexDirection: "column",
  p: 4,
  width: "ref",
  "&:hover": {
    bg: "muted",
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
      "&:disabled": {
        color: "negativeBackground",
        cursor: "not-allowed",
      },
    },
    negative: {
      ...controlBase,
      color: "negative",
      bg: "negativeMuted",
      "&:hover": {
        bg: "negativeBackground",
      },
      "&:disabled": {
        color: "negativeBackground",
        cursor: "not-allowed",
      },
    },
    positive: {
      ...controlBase,
      bg: "positiveMuted",
      color: "positive",
      "&:hover": { bg: "positiveBackground" },
    },
    transparent: {
      ...controlBase,
      bg: "transparent",
    },
  },
  cards: {
    primary: {
      ...cardBase,
    },
    parent: {
      ...cardBase,
      border: "5px solid",
      borderColor: "muted",
      "&:hover": {
        borderColor: "transparent",
      },
    },
    editing: {
      bg: "background",
      "&:hover": {
        bg: "background",
      },
    },
  },
  colors: {
    background: "rgba(255, 255, 255, 1)",
    modes: refTypeColorModes,
    muted: "rgba(0, 0, 0, 0.03)",
    negative: "rgba(230, 59, 24, 1)",
    negativeBackground: "rgba(230, 59, 24, 0.2)",
    negativeMuted: "rgba(230, 59, 24, 0.05)",
    positive: "rgba(19, 201, 141, 1)",
    positiveBackground: "rgba(19, 201, 141, 0.2)",
    positiveMuted: "rgba(19, 201, 141, 0.1)",
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
    wrapper: {
      position: "relative",
      px: 3,
      justifyContent: "center",
      alignItems: "center",
    },
    parent: {
      bg: "transparent",
      my: 3,
    },
    imageWrapper: {
      backgroundColor: "muted",
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderRadius: 2,
      mr: 3,
      overflow: "hidden",
      size: "image",
      flexShrink: 0,
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
      zIndex: 9,
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
      bg: "muted",
      color: "text",
      flexShrink: 1,
      textAlign: "center",
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
      textAlign: "left",
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
      lineHeight: "body",
    },
  },
  lineHeights: {
    body: 1.5,
    heading: 1.5,
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
    ref: 764,
  },
  space: [0, 4, 8, 16, 32, 40],
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    progress: {
      bg: "muted",
      color: "primary",
      height: 8,
    },
    a: {
      color: "primary",
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
      fontWeight: "bold",
    },
    edit: {
      flex: "1 1",
      overflow: "hidden",
    },
  },
};
