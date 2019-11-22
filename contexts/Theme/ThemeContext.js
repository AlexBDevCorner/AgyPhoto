import React from 'react';

import DefaultInitialState from './DefaultInitialState';

export const ThemeContext = React.createContext(DefaultInitialState);

export const ThemeProvider = ThemeContext.Provider;
