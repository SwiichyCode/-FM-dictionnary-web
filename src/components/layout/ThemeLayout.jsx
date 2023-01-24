import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/themes.js";
import { GlobalStyle } from "../../styles/globalStyles";
import useThemeStore from "../../stores/themeStore.js";
import useFontStore from "../../stores/fontStore.js";
export const ThemeLayout = ({ children }) => {
  const theme = useThemeStore((state) => state.theme);
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const font = useFontStore((state) => state.font);

  return (
    <ThemeProvider theme={{ color: themeMode, font: font }}>
      <GlobalStyle />

      {children}
    </ThemeProvider>
  );
};
