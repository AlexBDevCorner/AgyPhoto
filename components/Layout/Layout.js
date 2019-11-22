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

  const components = [
    { comp: <MainMenu config={testConfig} />, id: "menu-component" },
    { comp: children, id: "children-component" }
  ];
  
  const index = isMenuOpen ? 0 : 1;

  const transitions = useTransition(components[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <>
      <Header data-test="layout-header" pageTitle={pageTitle} />

      {transitions.map(({ item, key, props }) => (
        <animated.div key={key} style={props}>
          {item.comp}
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
            height: 5vh;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
