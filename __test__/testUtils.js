import { shallow } from 'enzyme';

export const shallowComponent = component => shallow(component);

export const findInWrapper = (wrapper, selector) => wrapper.find(selector);

export default {
  shallowComponent,
  findInWrapper
};
