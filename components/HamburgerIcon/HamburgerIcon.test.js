import React from 'react';

import HamburgerIcon from './HamburgerIcon';

import { shallowComponent, findInWrapper } from '../../testUtils';

describe('HamburgerIcon component tests', () => {
  it('should render hamburger icon without errors', () => {
    const wrapper = shallowComponent(<HamburgerIcon />);

    const icon = wrapper.find("[data-test='hamburger-icon-svg']");
    expect(icon.length).toBe(1);
  });

  it('should render with fill property equal to what passed in props', () => {
    const fill = '#1F2833';

    const wrapper = shallowComponent(<HamburgerIcon fill={fill} />);

    expect(
      wrapper
        .find('JSXStyle')
        .children()
        .text()
    ).toEqual(expect.stringContaining(`fill:${fill}`));
  });

  it('should show X icon if isMenuOpen prop is true', () => {
    const wrapper = shallowComponent(<HamburgerIcon isMenuOpen="true" />);
    const xMenuIcon = findInWrapper(wrapper, "[data-test='x-icon-svg']");

    expect(xMenuIcon.length).toBe(1);
  });

  it('should show hamburger icon if isMenuOpen prop is false', () => {
    const wrapper = shallowComponent(<HamburgerIcon isMenuOpen="false" />);
    console.log(wrapper.debug());
    const hamburgerMenuIcon = findInWrapper(
      wrapper,
      "[data-test='hamburger-icon-svg']"
    );

    expect(hamburgerMenuIcon.length).toBe(1);
  });
});
