import React, { useContext } from 'react';
import Header from '../Header';

import { ThemeContext } from '../../contexts/Theme';

const Layout = () => {
  const { state } = useContext(ThemeContext);
  const { headerBackgroundColor, iconsColor, mainColor } = state;

  return (
    <>
      <Header
        data-test="layout-header"
        headerBackgroundColor={headerBackgroundColor}
        iconsColor={iconsColor}
      />
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
        `}
      </style>
    </>
  );
};

export default Layout;
