import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color_palette_white: '#FFF',
  color_palette_black: '#000',
  color_palette_light_grey: '#F3F3F3',
  color_palette_medium_grey: '#E5E5E5',
  color_palette_dark_grey: '#7D7D7D',
  font_primary: "'Libre Baskerville', serif;",
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
