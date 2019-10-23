/* eslint-disable react/prop-types */
// @flow
import React, { useReducer } from 'react';

import DefaultInitialState from './DefaultInitialState';
import ThemeReducer from './ThemeReducer';

export const ThemeContext: any = React.createContext(DefaultInitialState);

export const ThemeProvider: any = ThemeContext.Provider;
