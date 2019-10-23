import React from 'react';

import Layout from './Layout';
import { ThemeProvider, DefaultInitialState } from '../../contexts/Theme';

import { findInWrapperByDataTest, mountComponent } from '../../testUtils';

const setup = (props = DefaultInitialState) =>
  mountComponent(
    <ThemeProvider value={{ state: { ...DefaultInitialState, ...props } }}>
      <Layout />
    </ThemeProvider>
  );

describe('Layout component tests', () => {
  it('should render Header component', () => {
    const wrapper = setup();

    const header = findInWrapperByDataTest(wrapper, 'layout-header');

    expect(header.length).toBe(1);
  });

  it('should pass default  headerBackgroundColor prop from context to Header component', () => {
    const wrapper = setup({ headerBackgroundColor: '' });

    const header = findInWrapperByDataTest(wrapper, 'layout-header');

    expect(header.props().headerBackgroundColor).toBe('');
  });

  it('should pass headerBackgroundColor prop from context to Header component', () => {
    const wrapper = setup({ headerBackgroundColor: '#123456' });

    const header = findInWrapperByDataTest(wrapper, 'layout-header');

    expect(header.props().headerBackgroundColor).toBe('#123456');
  });

  it('should pass default iconsColor prop from context to Header component', () => {
    const wrapper = setup();

    const header = findInWrapperByDataTest(wrapper, 'layout-header');

    expect(header.props().iconsColor).toBe('#8F8389');
  });

  it('should pass iconsColor prop from context to Header component', () => {
    const wrapper = setup({ iconsColor: '#123456' });

    const header = findInWrapperByDataTest(wrapper, 'layout-header');

    expect(header.props().iconsColor).toBe('#123456');
  });

  it('should render with background-color got from context', () => {
    const wrapper = setup({ mainColor: '#123456' });

    expect(
      wrapper
        .find('JSXStyle')
        .at(3)
        .props().children
    ).toEqual(expect.stringContaining(`background-color:#123456;`));
  });
});
