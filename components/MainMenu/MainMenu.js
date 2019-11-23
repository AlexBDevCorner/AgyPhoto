import React, { useContext } from 'react';

import { MainMenuContext } from '../../contexts/MainMenu';

import MainMenuItem from './MainMenuItem';

const MainMenu = ({ config }) => {
  const items = config.map(link => (
    <MainMenuItem key={link.name} name={link.name} link={link.link} />
  ));

  const { isMenuOpen } = useContext(MainMenuContext);

  const visibility = isMenuOpen ? 'visible' : 'hidden';

  return (
    <>
      <menu>{items}</menu>

      <style jsx>
        {`
          menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            visibility: ${visibility};
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  );
};

export default MainMenu;
