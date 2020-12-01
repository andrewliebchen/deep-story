const buttonBase = {
  borderRadius: 3,
  px: 3,
  py: 2,
  cursor: "pointer",
};

export default {
  useColorSchemeMediaQuery: true,
  colors: {
    background: "rgba(255, 255, 255, 1)",
    muted: "rgba(0, 0, 0, 0.5)",
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
  button: {
    default: {
      ...buttonBase,
      bg: "primaryMuted",
      color: "primary",
      "&:hover": {
        bg: "primaryBackground",
      },
    },
    primary: {
      ...buttonBase,
      bg: "primary",
      color: "background",
      fontWeight: "bold",
      "&:hover": {
        bg: "primaryHover",
      },
    },
    negative: {
      ...buttonBase,
      color: "negative",
      bg: "negativeBackground", {
        "&:hover" : {

        },
      },
    },
  },
  heading: {
    fontSize: 1,
  },
  input: {
    inline: {
      bg: "primaryBackground",
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
    img: {
      display: "block",
      maxWidth: "100%",
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
