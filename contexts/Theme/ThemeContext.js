// @flow
import React from 'react';
import type { ThemeState } from './Types';

const ThemeContext = React.createContext<ThemeState>({
  mainColor: 'green',
  iconsColor: '#000000',
  headerBackgroundColor: ''
});

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
export default ThemeContext;
