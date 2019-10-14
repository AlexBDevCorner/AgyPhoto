// @flow
import React, { useState } from 'react';

import HamburgerIcon from './HamburgerIcon';
import Logo from './Logo';

type HeaderProps = {
  headerBackgroundColor: string,
  iconsColor: string
};

const Header = ({ headerBackgroundColor, iconsColor }: HeaderProps) => {
  return (
    <>
      <header data-test="header">
        <nav className="fixed-nav-bar">
          <Logo data-test="main-logo" fill={iconsColor} />
          <HamburgerIcon data-test="hamburger-menu-icon" fill={iconsColor} />
        </nav>
        <style jsx>
          {`
            .fixed-nav-bar {
              display: flex;
              justify-content: space-between;
              padding-top: 10px;
              padding-right: 20px;
              padding-left: 20px;
              position: fixed;
              top: 0;
              left: 0;
              z-index: 9999;
              width: 100%;
              height: 50px;
              background-color: ${headerBackgroundColor};
            }
          `}
        </style>
      </header>
    </>
  );
};

export default Header;

// #1F2833
