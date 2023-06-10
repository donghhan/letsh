import { createStyledBreakpointsTheme } from "styled-breakpoints";

export const primaryTheme = {
  color: {
    black: "#222325",
    gray: "#f9f5f1",
    white: "#fffcf9",
    darkgray: "rgb(210, 210, 210)",
  },
  fontFamily: {
    openSans: "'Open Sans', sans-serif;",
    robotoMono: "'Roboto Mono', monospace;",
  },
} as const;

const BreakpointTheme = createStyledBreakpointsTheme({
  breakpoints: {
    xs: "300px",
    sm: "375px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
  },
});

export const theme = {
  ...primaryTheme,
  ...BreakpointTheme,
};
