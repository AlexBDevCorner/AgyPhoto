// @flow
import React from 'react';

type Theme = {
  mainColor: string
};

const ThemeContext = React.createContext<Theme>({ mainColor: 'green' });

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
export default ThemeContext;
