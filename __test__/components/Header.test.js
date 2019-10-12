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
});
