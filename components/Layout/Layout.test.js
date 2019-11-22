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

  it('should render with background-color got from context', () => {
    const wrapper = setup({ mainColor: '#123456' });

    expect(
      wrapper
        .find('JSXStyle')
        .at(2)
        .props().children
    ).toEqual(expect.stringContaining(`background-color:#123456;`));
  });
});
