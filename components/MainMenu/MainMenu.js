// @flow
import React from 'react';

import MainMenuItem from './MainMenuItem';

const MainMenu = ({ config }: Array<{| link: string, name: string |}>) => {
  return (
    <menu>
      {config.map(link => (
        <MainMenuItem key={link.name} name={link.name} link={link.link} />
      ))}
    </menu>
  );
};

export default MainMenu;
