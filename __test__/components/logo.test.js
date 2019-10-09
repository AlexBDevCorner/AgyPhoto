import { shallow, mount } from 'enzyme'
import React from 'react'

import Logo from "../../components/Logo"

describe("Logo component tests", () => {
    
    it("should render logo without errors", () => {
        const wrapper = shallow(<Logo />)

        expect(wrapper).toBeTruthy()
    })

    it("should render logo svg", () => {
        const wrapper = shallow(<Logo />)

        expect(wrapper.find("#logo")).toBeTruthy()
    })

    it("should render with fill property equal to what passed in props", () => {
        const fill = "#1F2833"

        const wrapper = shallow(<Logo fill = { fill } />)

        expect(wrapper.find("JSXStyle").children().text())
            .toEqual(expect.stringContaining(`fill:${fill}`))
    })

    it("should render with fill property equal to default value if fill prop is not passed", () => {
        const fill = "#000000"
        
        const wrapper = shallow(<Logo />)

        expect(wrapper.find("JSXStyle").children().text())
            .toEqual(expect.stringContaining(`fill:${fill}`))
    })

})