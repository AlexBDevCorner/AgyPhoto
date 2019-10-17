import { shallow } from 'enzyme';
import React from 'react';

import Index from './pages/index';

describe('index page tests', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Index />);

    const layout = wrapper.find("[data-test='app-layout']");
    expect(layout.length).toBe(1);
  });
});
