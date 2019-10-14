// @flow
import React, { useContext } from 'react';

type ThemeState = {
  mainColor: string,
  iconsColor: string,
  headerBackgroundColor: string
};

type ChangeMainColorAction = {
  type: 'change_main_color',
  mainColor: string
};

type ChangeIconsColorAction = {
  type: 'change_icons_color',
  iconsColor: string
};

type ChangeHeaderBackgroundColorAction = {
  type: 'change_header_background_color',
  headerBackgroundColor: string
};
type ThemeAction =
  | ChangeMainColorAction
  | ChangeIconsColorAction
  | ChangeHeaderBackgroundColorAction;

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'change_main_color':
      return {
        ...state,
        mainColor: action.mainColor
      };
    case 'change_icons_color':
      return {
        ...state,
        iconsColor: action.iconsColor
      };
    case 'change_header_background_color':
      return {
        ...state,
        headerBackgroundColor: action.headerBackgroundColor
      };
    default:
      return state;
  }
}

const ThemeContext = React.createContext<ThemeState>({
  mainColor: 'green',
  iconsColor: '#000000',
  headerBackgroundColor: ''
});

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
export default ThemeContext;
