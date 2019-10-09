import { shallow } from 'enzyme'
import React from 'react'

import Logo from "../../components/Logo"
import { italic } from 'ansi-colors'

describe("Logo component tests", () => {
    it("should render logo without errors", () => {
        const logo = shallow(<Logo />)

        expect(logo.find("#logo")).not.toBeNull();
    })  
})