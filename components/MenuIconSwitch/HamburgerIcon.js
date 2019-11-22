import React from 'react';

import MenuIconSwitch from './MenuIconSwitch';

const HamburgerIcon = ({ fill, isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <MenuIconSwitch
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </>
  );
};

export default HamburgerIcon;
