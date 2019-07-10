import { mount } from 'enzyme'
import React from 'react'

import Index from '../pages/index.js'

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = mount(<Index />)

    console.dir(app.find('.fixed-nav-bar'));

    expect(app.find('#testt').text()).toEqual("OlivijaOwl");
  })
})