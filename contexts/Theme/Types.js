// @flow

export type ChangeMainColorAction = {
  type: 'change_main_color',
  mainColor: string
};

export type ChangeIconsColorAction = {
  type: 'change_icons_color',
  iconsColor: string
};

export type ChangeHeaderBackgroundColorAction = {
  type: 'change_header_background_color',
  headerBackgroundColor: string
};
export type ThemeState = {
  mainColor: string,
  iconsColor: string,
  headerBackgroundColor: string
};

export type ThemeAction =
  | ChangeMainColorAction
  | ChangeIconsColorAction
  | ChangeHeaderBackgroundColorAction;
