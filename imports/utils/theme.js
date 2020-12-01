export default {
  useColorSchemeMediaQuery: true,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: 600,
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    background: "rgba(255, 255, 255, 1)",
    muted: "rgba(0, 0, 0, 0.5)",
    negative: "rgba(230, 59, 24, 1)",
    negativeBackground: "rgba(230, 59, 24, 0.05)",
    primary: "rgba(0, 119, 204, 1)",
    primaryBackground: "rgba(0, 119, 204, 0.2)",
    primaryMuted: "rgba(0, 119, 204, 0.05)",
    secondary: "rgba(51, 0, 204, 1)",
    text: "rgba(0, 0, 0, 1)",
    textSecondary: "rgba(0, 0, 0, 0.5)",
    modes: {
      dark: {
        background: "rgba(6, 6, 6, 1)",
        muted: "rgba(255, 255, 255, 0.05)",
        negative: "rgba(230, 59, 24, 1)",
        negativeBackground: "rgba(230, 59, 24, 0.2)",
        primary: "rgba(51, 204, 255, 1)",
        primaryBackground: "rgba(51, 204, 255, 0.3)",
        primaryMuted: "rgba(51, 204, 255, 0.1)",
        secondary: "rgba(238, 0, 255, 1)",
        text: "rgba(255, 255, 255, 1)",
        textSecondary: "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  text: {
    ref: {
      fontFamily: "monospace",
      whiteSpace: "pre-wrap",
    },
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
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      display: "block",
      maxWidth: "100%",
    },
  },
};
