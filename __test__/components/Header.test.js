import React from 'react';

import Header from '../../components/Header';

import { shallowComponent, findInWrapper } from '../testUtils';

const shallowHeaderWrapper = () => shallowComponent(<Header />);

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

  it('should render with empty background-color property', () => {
    const wrapper = shallowHeaderWrapper();

    expect(
      wrapper
        .find('JSXStyle')
        .children()
        .text()
    ).toEqual(expect.stringContaining(`background-color:;`));
  });

  it('should pass default header icon color state to Logo props', () => {
    const wrapper = shallowHeaderWrapper();
    const logo = findInWrapper(wrapper, "[data-test='main-logo']");

    expect(logo.props().fill).toBe('#000000');
  });

  it('should pass default header icon color state to Hamburger Icon props', () => {
    const wrapper = shallowHeaderWrapper();
    const logo = findInWrapper(wrapper, "[data-test='hamburger-menu-icon']");

    expect(logo.props().fill).toBe('#000000');
  });
});
