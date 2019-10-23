import React from 'react';

import ThemeReducer from './ThemeReducer';
import DefaultInitialState from './DefaultInitialState';
import {
  changeMainColorAction,
  changeIconsColor,
  changeHeaderBackgroundColor
} from './actions';

describe('ThereReducer tests', () => {
  it('should return default state if not existent action is passed', () => {
    const newState = ThemeReducer(DefaultInitialState, { action: '' });

    expect(newState).toEqual(DefaultInitialState);
  });

  it('should return correctly updated state if changeMainColorAction action is passed', () => {
    const expectedState = { ...DefaultInitialState, mainColor: '#123456' };

    const action = { type: 'change_main_color', mainColor: '#123456' };

    const newState = ThemeReducer(DefaultInitialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('should return correctly updated state if changeIconsColor action is passed', () => {
    const expectedState = { ...DefaultInitialState, iconsColor: '#123456' };

    const action = { type: 'change_icons_color', iconsColor: '#123456' };

    const newState = ThemeReducer(DefaultInitialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('should return correctly updated state if changeHeaderBackgroundColor action is passed', () => {
    const expectedState = {
      ...DefaultInitialState,
      headerBackgroundColor: '#123456'
    };

    const action = {
      type: 'change_header_background_color',
      headerBackgroundColor: '#123456'
    };

    const newState = ThemeReducer(DefaultInitialState, action);

    expect(newState).toEqual(expectedState);
  });
});
