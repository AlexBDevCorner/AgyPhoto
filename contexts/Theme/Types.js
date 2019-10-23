// @flow

export type ChangeMainColorAction = {
  type: string,
  mainColor: string
};

export type ChangeIconsColorAction = {
  type: string,
  iconsColor: string
};

export type ChangeHeaderBackgroundColorAction = {
  type: string,
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
