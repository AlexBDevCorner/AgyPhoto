import React from 'react';

import Header from './Header';

import { shallowComponent, findInWrapper } from '../../testUtils';

const shallowHeaderWrapper = () => shallowComponent(<Header />);
const shallowHeaderWrapperWithProps = props =>
  shallowComponent(<Header {...props} />);

describe('Header component tests', () => {
  it('should render Header without errors', () => {
    const wrapper = shallowHeaderWrapper();
    const header = findInWrapper(wrapper, "[data-test='header']");

    expect(header.length).toBe(1);
  });

  it('should render Logo', () => {
    const wrapper = shallowHeaderWrapper();
    const logo = findInWrapper(wrapper, "[data-test='main-logo']");

    expect(logo.length).toBe(1);
  });

  it('should render hamburger menu icon', () => {
    const wrapper = shallowHeaderWrapper();
    const hamburgerMenuIcon = findInWrapper(
      wrapper,
      "[data-test='hamburger-menu-icon']"
    );

    expect(hamburgerMenuIcon.length).toBe(1);
  });

  it('should render with empty string passed in props background-color property', () => {
    const wrapper = shallowHeaderWrapperWithProps({
      headerBackgroundColor: ''
    });

    expect(
      wrapper
        .find('JSXStyle')
        .children()
        .text()
    ).toEqual(expect.stringContaining(`background-color:;`));
  });

  it('should render with string value passed in props background-color property', () => {
    const wrapper = shallowHeaderWrapperWithProps({
      headerBackgroundColor: '#000000'
    });

    expect(
      wrapper
        .find('JSXStyle')
        .children()
        .text()
    ).toEqual(expect.stringContaining(`background-color:#000000;`));
  });

  it('should pass icon color prop state to Logo props', () => {
    const wrapper = shallowHeaderWrapperWithProps({ iconsColor: '#000000' });
    const logo = findInWrapper(wrapper, "[data-test='main-logo']");

    expect(logo.props().fill).toBe('#000000');
  });

  it('should pass default header icon color state to Hamburger Icon props', () => {
    const wrapper = shallowHeaderWrapperWithProps({ iconsColor: '#000000' });
    const logo = findInWrapper(wrapper, "[data-test='hamburger-menu-icon']");

    expect(logo.props().fill).toBe('#000000');
  });
});
