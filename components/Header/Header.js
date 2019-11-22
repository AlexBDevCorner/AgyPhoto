import React, { useContext } from 'react';

import MenuIcon from '../MenuIcon';
import MenuIconSwitch from '../MenuIconSwitch';
import Logo from '../Logo';
import Title from '../Title';

import { ThemeContext } from '../../contexts/Theme';
import { MainMenuContext } from '../../contexts/MainMenu';

const Header = ({ pageTitle }) => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MainMenuContext);
  const { state } = useContext(ThemeContext);

  const { headerBackgroundColor, secondaryColor } = state;

  return (
    <>
      <header data-test="header">
        <nav className="fixed-nav-bar">
          <Logo data-test="main-logo" fill={secondaryColor} />
          <Title pageTitle={pageTitle} textColor={secondaryColor} />
          <MenuIcon />
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

            .menu-icon-container {
              position: relative;
            }
          `}
        </style>
      </header>
    </>
  );
};

export default Header;

/* <div
            className="menu-icon-container"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIconSwitch
              isMenuOpen={isMenuOpen}
              data-test="menu-icon-switch"
            />
          </div> */
