import {
  changeMainColorAction,
  changeIconsColor,
  changeHeaderBackgroundColor
} from './actions';

describe('actions tests', () => {
  it('should return changeMainColorAction with passed string value', () => {
    const action = changeMainColorAction('test');

    expect(action.mainColor).toBe('test');
  });

  it('should return changeMainColorAction with empty string if null was passed', () => {
    const action = changeMainColorAction(null);

    expect(action.mainColor).toBe('');
  });

  it('should return changeMainColorAction with empty string if undefined was passed', () => {
    const action = changeMainColorAction(undefined);

    expect(action.mainColor).toBe('');
  });

  it('should return changeIconsColor with passed string value', () => {
    const action = changeIconsColor('test');

    expect(action.iconsColor).toBe('test');
  });

  it('should return changeIconsColor with empty string if null was passed', () => {
    const action = changeIconsColor(null);

    expect(action.iconsColor).toBe('');
  });

  it('should return changeIconsColor with empty string if undefined was passed', () => {
    const action = changeIconsColor(undefined);

    expect(action.iconsColor).toBe('');
  });

  it('should return changeHeaderBackgroundColor with passed string value', () => {
    const action = changeHeaderBackgroundColor('test');

    expect(action.headerBackgroundColor).toBe('test');
  });

  it('should return changeHeaderBackgroundColor with empty string if null was passed', () => {
    const action = changeHeaderBackgroundColor(null);

    expect(action.headerBackgroundColor).toBe('');
  });

  it('should return changeHeaderBackgroundColor with empty string if undefined was passed', () => {
    const action = changeHeaderBackgroundColor(undefined);

    expect(action.headerBackgroundColor).toBe('');
  });
});
