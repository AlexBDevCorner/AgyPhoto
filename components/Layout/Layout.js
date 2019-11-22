import React, { useContext } from 'react';
import { useTransition, animated } from 'react-spring';

import Header from '../Header';
import MainMenu from '../MainMenu';

import { ThemeContext } from '../../contexts/Theme';
import { MainMenuContext } from '../../contexts/MainMenu';

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

  const { isMenuOpen } = useContext(MainMenuContext);

  const transitions = useTransition(isMenuOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    unique: true
  });

  return (
    <>
      <Header data-test="layout-header" pageTitle={pageTitle} />

      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div key={key} style={props}>
            <MainMenu config={testConfig} />
          </animated.div>
        ) : (
          <animated.div key={key} style={props}>
            {children}
          </animated.div>
        )
      )}

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
          }

          header {
            height: 20vh;
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
