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

const buttonFloatingStyles = {
  bg: "background",
  boxShadow:
    "0 0 10px 10px rgba(0, 0, 0, 0.02)," +
    "0 6px 10px 0 rgba(0, 0, 0, 0.08)," +
    "0 15px 10px 0 rgba(0, 0, 0, 0.06)," +
    "0 0 0 1px rgba(0, 0, 0, 0.05) ",
};

const iconButtonBase = {
  p: 0,
};

export default {
  useColorSchemeMediaQuery: true,
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
    floating: {
      ...controlBase,
      ...buttonFloatingStyles,
    },
    floatingPrimary: {
      ...controlBase,
      ...buttonFloatingStyles,
      ...buttonPrimaryStyles,
    },
    floatingNegative: {
      ...controlBase,
      ...buttonFloatingStyles,
      color: "negative",
      "&:hover": {
        bg: "negativeBackground",
      },
    },
  },
  colors: {
    background: "rgba(255, 255, 255, 1)",
    muted: "rgba(0, 0, 0, 0.05)",
    negative: "rgba(230, 59, 24, 1)",
    negativeBackground: "rgba(230, 59, 24, 0.2)",
    negativeMuted: "rgba(230, 59, 24, 0.05)",
    primary: "rgba(0, 119, 204, 1)",
    primaryBackground: "rgba(0, 119, 204, 0.2)",
    primaryHover: "rgba(0, 104, 178, 1)",
    primaryMuted: "rgba(0, 119, 204, 0.05)",
    secondary: "rgba(51, 0, 204, 1)",
    text: "rgba(0, 0, 0, 1)",
    textSecondary: "rgba(0, 0, 0, 0.5)",
    modes: {
      dark: {
        background: "rgba(6, 6, 6, 1)",
        muted: "rgba(255, 255, 255, 0.05)",
        negative: "rgba(230, 59, 24, 1)",
        negativeBackground: "rgba(230, 59, 24, 0.3)",
        negativeMuted: "rgba(230, 59, 24, 0.2)",
        primary: "rgba(51, 204, 255, 1)",
        primaryHover: "rgba(46, 184, 229, 1)",
        primaryBackground: "rgba(51, 204, 255, 0.3)",
        primaryMuted: "rgba(51, 204, 255, 0.1)",
        secondary: "rgba(238, 0, 255, 1)",
        text: "rgba(255, 255, 255, 1)",
        textSecondary: "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  flex: {
    controlContainer: {
      position: "relative",
      height: controlHeight,
      alignItems: "center",
    },
    highlight: {
      bg: "primaryMuted",
      flexGrow: 1,
      height: controlHeight,
      borderRadius: 3,
    },
    tile: {
      borderRadius: 2,
      bg: "background",
      color: "text",
      height: 160,
      p: 3,
      "&:hover": {
        bg: "primaryMuted",
      },
    },
    wordBlockHighlight: {
      borderRadius: 1,
      cursor: "text",
      position: "reative",
      userSelect: "none",
      zIndex: 1,
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
  fontSizes: [12, 16],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  heading: {
    fontSize: 1,
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
    negative: {
      ...controlBase,
      ...buttonNegativeStyles,
      ...iconButtonBase,
    },
    floating: {
      ...controlBase,
      ...buttonFloatingStyles,
      ...iconButtonBase,
    },
    floatingPrimary: {
      ...controlBase,
      ...buttonFloatingStyles,
      ...buttonPrimaryStyles,
      ...iconButtonBase,
    },
    floatingNegative: {
      ...controlBase,
      ...buttonFloatingStyles,
      ...iconButtonBase,
      color: "negative",
      "&:hover": {
        bg: "negativeBackground",
      },
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
    },
    inline: {
      bg: "transparent",
      border: 0,
      borderRadius: 0,
      caretColor: "primary",
      display: "flex",
      flex: 1,
      fontFamily: "monospace",
      minHeight: 24,
      minWidth: "auto",
      p: 0,
      whiteSpace: "pre-wrap",
      width: "auto",
      "&:focus": {
        outline: "none",
      },
    },
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  radii: [0, 4, 8, 12],
  select: {
    default: {
      ...controlBase,
      border: 0,
      minWidth: 200,
    },
  },
  sizes: {
    container: 600,
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
    ref: {
      fontFamily: "monospace",
      whiteSpace: "pre-wrap",
    },
    small: {
      fontSize: "small",
    },
  },
};
