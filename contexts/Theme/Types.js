// @flow

export type ChangeMainColorAction = {
  type: string,
  mainColor: string
};

export type ChangeSecondaryColorAction = {
  type: string,
  SecondaryColor: string
};

export type ChangeHeaderBackgroundColorAction = {
  type: string,
  headerBackgroundColor: string
};
export type ThemeState = {
  mainColor: string,
  SecondaryColor: string,
  headerBackgroundColor: string
};

export type ThemeAction =
  | ChangeMainColorAction
  | ChangeSecondaryColorAction
  | ChangeHeaderBackgroundColorAction;
