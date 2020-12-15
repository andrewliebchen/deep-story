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
  },
  colors: {
    background: "rgba(255, 255, 255, 1)",
    muted: "rgba(0, 0, 0, 0.05)",
    negative: "rgba(230, 59, 24, 1)",
    negativeBackground: "rgba(230, 59, 24, 0.2)",
    negativeMuted: "rgba(230, 59, 24, 0.05)",
    positive: "rgba(19, 201, 141, 1)",
    primary: "rgba(0, 119, 204, 1)",
    primaryBackground: "rgba(204, 228, 245, 1)",
    primaryHover: "rgba(0, 104, 178, 1)",
    primaryMuted: "rgba(242, 248, 252, 1)",
    secondary: "rgba(123, 97, 255, 1)",
    shadow: "rgba(0, 0, 0, 0.05)",
    text: "rgba(0, 0, 0, 1)",
    textSecondary: "rgba(0, 0, 0, 0.5)",
    modes: {
      dark: {
        background: "rgba(6, 6, 6, 1)",
        muted: "rgba(255, 255, 255, 0.05)",
        negative: "rgba(230, 59, 24, 1)",
        negativeBackground: "rgba(230, 59, 24, 0.3)",
        negativeMuted: "rgba(230, 59, 24, 0.2)",
        positive: "rgba(19, 201, 141, 1)",
        primary: "rgba(51, 204, 255, 1)",
        primaryBackground: "rgba(19, 65, 81, 1)",
        primaryHover: "rgba(46, 184, 229, 1)",
        primaryMuted: "rgba(10, 26, 31, 1)",
        secondary: "rgba(145, 123, 255, 1)",
        shadow: "rgba(0, 0, 0, 0.05)",
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
    ref: {
      ...flexRefBase,
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
    toast: {
      color: "background",
      bg: "positive",
      height: controlHeight,
      alignItems: "center",
      px: 3,
      borderRadius: 3,
      fontWeight: "bold",
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 16, 18],
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
    negative: {
      ...controlBase,
      ...buttonNegativeStyles,
      ...iconButtonBase,
    },
    white: {
      ...controlBase,
      ...iconButtonBase,
      bg: "background",
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
    },
    inline: {
      ...invisibleInputBase,
      display: "flex",
      flex: 1,
      width: "auto",
      minHeight: 24,
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
      width: "100%",
    },
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
    ref: {
      fontFamily: "monospace",
      whiteSpace: "pre-wrap",
    },
    small: {
      fontSize: "small",
    },
  },
  textarea: {
    ref: {
      ...invisibleInputBase,
      ...flexRefBase,
      resize: "none",
    },
  },
};
