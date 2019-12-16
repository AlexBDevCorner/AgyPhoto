import React, { useContext } from 'react';

import { MainMenuContext } from '../../contexts/MainMenu';

const MenuIcon = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MainMenuContext);

  const clickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuState = isMenuOpen ? 'close' : '';

  return (
    <>
      <div className={`menu ${menuState}`} onClick={() => clickHandler()}>
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <style jsx>
        {`
          .menu {
            width: 2.5rem;
            height: 2.5rem;
            position: relative;
          }

          .menu.close .line1 {
            transform: rotate(45deg);
            top: 50%;
          }

          .menu.close .line2,
          .menu.close .line3 {
            transform: rotate(-45deg);
            top: 50%;
          }

          .line {
            position: absolute;
            height: 0.15rem;
            width: 2rem;
            background: black;
            border-radius: 8px;
            transition: all ease 0.3s;
          }

          .line1 {
            top: 30%;
          }

          .line2 {
            top: 50%;
          }

          .line3 {
            top: 70%;
          }
        `}
      </style>
    </>
  );
};

export default MenuIcon;
