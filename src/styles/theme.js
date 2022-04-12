/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    color1: '#012A4A',
    color2: '#013A63',
    color3: '#01497C',
    color4: '#014F86',
    color5: '#2A6F97',
    color6: '#2C7DA0',
    color7: '#68FAF',
    color8: '#61A5C2',
    color9: '#89C2D9',
    color10: '#A9D6E5',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
