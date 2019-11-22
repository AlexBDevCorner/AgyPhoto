import React, { useContext } from 'react';
import { useTransition, animated } from 'react-spring';

import { ThemeContext } from '../../contexts/Theme';

import HamburgerIconSVG from './icons/HamburgerIconSVG';
import CloseMenuIconSVG from './icons/CloseMenuIconSVG';

const MenuIconSwitch = ({ isMenuOpen }) => {
  const { state } = useContext(ThemeContext);

  const { secondaryColor } = state;

  const transitions = useTransition(isMenuOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    trail: 1000,
    unique: true
  });

  return (
    <>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div key={key} style={props}>
            <CloseMenuIconSVG fill={secondaryColor} />
          </animated.div>
        ) : (
          <animated.div key={key} style={props}>
            <HamburgerIconSVG fill={secondaryColor} />
          </animated.div>
        )
      )}
    </>
  );
};

export default MenuIconSwitch;
