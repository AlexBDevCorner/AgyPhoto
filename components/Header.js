// @flow

import React, { Fragment, useState } from 'react'

import HamburgerIcon from './HamburgerIcon'
import Logo from './Logo'

const Header = () => {
  
  const [ headerBackgroundColor, setHeaderBackgroundColor ] = useState<string>("")
  const [ IconsColor, setIconsColor ] = useState("#000000")

  return (
    <Fragment>
      <header>
        <nav className="fixed-nav-bar">
          <Logo fill={IconsColor} />
          <HamburgerIcon fill={IconsColor} />
        </nav>
        <style jsx>{`

          .fixed-nav-bar {
            display: flex;
            justify-content: space-between;
            padding-top: 10px;
            padding-right: 20px;
            padding-left: 20px;
            position: fixed;
            top: 0;
            left:0;
            z-index: 9999;
            width: 100%;
            height: 50px;
            background-color: ${headerBackgroundColor};
          }
        `}</style>
      </header>
    </Fragment>
    )
}

export default Header

//#1F2833