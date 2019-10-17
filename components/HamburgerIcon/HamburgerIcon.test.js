import { shallow } from 'enzyme';
import React from 'react';

import HamburgerIcon from './HamburgerIcon';

describe('HamburgerIcon component tests', () => {
  it('should render hamburger icon without errors', () => {
    const wrapper = shallow(<HamburgerIcon />);

    const icon = wrapper.find("[data-test='hamburger-icon-svg']");
    expect(icon.length).toBe(1);
  });

  it('should render with fill property equal to what passed in props', () => {
    const fill = '#1F2833';

    const wrapper = shallow(<HamburgerIcon fill={fill} />);

    expect(
      wrapper
        .find('JSXStyle')
        .children()
        .text()
    ).toEqual(expect.stringContaining(`fill:${fill}`));
  });
});
