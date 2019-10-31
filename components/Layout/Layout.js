// @flow
import React, { useContext, useState } from 'react';

import Header from '../Header';
import MainMenu from '../MainMenu';

import { ThemeContext } from '../../contexts/Theme';

type LayoutProps = {
  pageTitle: string,
  children: any
};

const testConfig = [
  {
    name: 'Home',
    link: ''
  },
  {
    name: 'Gallery',
    link: 'gallery'
  },
  {
    name: 'About me',
    link: 'about_me'
  }
];

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const { state } = useContext(ThemeContext);
  const { headerBackgroundColor, secondaryColor, mainColor } = state;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // if isMenuOpen then show children, otherwise show menu
  return (
    <>
      <Header
        data-test="layout-header"
        pageTitle={pageTitle}
        headerBackgroundColor={headerBackgroundColor}
        secondaryColor={secondaryColor}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {isMenuOpen ? <MainMenu config={testConfig} /> : children}

      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body {
            background-color: ${mainColor};
          }

          menu {
            margin-top: 30vh;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
