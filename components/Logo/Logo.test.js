import { shallow } from 'enzyme';
import React from 'react';

import Logo from '../../components/Logo';

describe('Logo component tests', () => {
  it('should render logo without errors', () => {
    const wrapper = shallow(<Logo />);

    const svgLogo = wrapper.find("[data-test='logo-svg']");
    expect(svgLogo.length).toBe(1);
  });

  it('should render with fill property equal to what passed in props', () => {
    const fill = '#1F2833';

    const wrapper = shallow(<Logo fill={fill} />);

    expect(
      wrapper
        .find('JSXStyle')
        .children()
        .text()
    ).toEqual(expect.stringContaining(`fill:${fill}`));
  });
});
