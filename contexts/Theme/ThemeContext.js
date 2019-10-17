// @flow
import React, { useContext } from 'react';
import * as types from './ActionTypes';
import type { ThemeState } from './Types';

type ThemeAction =
  | types.ChangeMainColorAction
  | types.ChangeIconsColorAction
  | types.ChangeHeaderBackgroundColorAction;

const ThemeContext = React.createContext<ThemeState>({
  mainColor: 'green',
  iconsColor: '#000000',
  headerBackgroundColor: ''
});

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
export default ThemeContext;
