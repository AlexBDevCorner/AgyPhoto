// @flow
import type { ThemeState, ThemeAction } from './Types';

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

export default themeReducer;
