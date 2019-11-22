import React from 'react';

import MainMenuItem from './MainMenuItem';

const MainMenu = ({ config }) => {
  const items = config.map(link => (
    <MainMenuItem key={link.name} name={link.name} link={link.link} />
  ));

  return (
    <>
      <menu>{items}</menu>

      <style jsx>
        {`
          menu {
            display: flex;
            flex-direction: column;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default MainMenu;
