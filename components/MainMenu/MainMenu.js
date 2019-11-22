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
            height: 80vh;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default MainMenu;
