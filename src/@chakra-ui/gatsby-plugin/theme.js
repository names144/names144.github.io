import { extendTheme } from "@chakra-ui/react";
const theme = {
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  colors: {
    primary: {
      light: "#52c7b8",
      main: "#009688",
      dark: "#00675b",
    },
    secondary: {
      light: "#67daff",
      main: "#03A9F4",
      dark: "#007ac1",
    },
  },
};

export default extendTheme(theme);
