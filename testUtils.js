import { shallow, mount } from 'enzyme';

export const shallowComponent = component => shallow(component);

export const mountComponent = component => mount(component);

export const findInWrapper = (wrapper, selector) => wrapper.find(selector);

export const findInWrapperByDataTest = (wrapper, selector) =>
  findInWrapper(wrapper, `[data-test='${selector}']`);

export default {
  findInWrapperByDataTest,
  mountComponent,
  shallowComponent,
  findInWrapper
};
