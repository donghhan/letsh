import { extendTheme, Theme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: { black: "#000", white: "#fff", signature: "#ff8f00" },
});

export default theme;
