import { createStyledBreakpointsTheme } from "styled-breakpoints";

export const primaryTheme = {
  color: {
    black: "#222325",
    beige: "#f9f5f1",
    gray: "#C5C5C5",
    white: "#fffcf9",
    darkgray: "#878787",
    red: "#E53E3E",
    green: "#38A169",
    darkgreen: "#8E9779",
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
