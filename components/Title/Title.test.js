import React from 'react';

import Title from './Title';

import { shallowComponent, findInWrapperByDataTest } from '../../testUtils';

describe('Title component tests', () => {
  it('should render without errors', () => {
    const wrapper = shallowComponent(<Title />);

    const title = findInWrapperByDataTest(wrapper, 'page-title');

    expect(title.length).toBe(1);
  });

  it('should render with passed text from props', () => {
    const wrapper = shallowComponent(<Title pageTitle="title" />);

    const title = findInWrapperByDataTest(wrapper, 'page-title');

    expect(title.text()).toBe('title');
  });

  it('should render empty string string if passed', () => {
    const wrapper = shallowComponent(<Title />);

    const title = findInWrapperByDataTest(wrapper, 'page-title');

    expect(title.text()).toBe('');
  });
});
