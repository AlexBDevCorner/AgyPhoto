import React, { useContext } from 'react';

import Header from '../Header';
import MainMenu from '../MainMenu';

import { ThemeContext } from '../../contexts/Theme';

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

const Layout = ({ pageTitle, children }) => {
  const { state } = useContext(ThemeContext);
  const { mainColor } = state;

  return (
    <>
      {children}

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
            display: flex;
            flex-direction: column;
            width: 100vw;
            overflow-x: hidden;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
