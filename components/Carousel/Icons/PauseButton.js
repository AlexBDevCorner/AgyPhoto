import React from 'react';

import Icon from './Icon';

const PauseButton = ({
  width,
  height,
  fill,
  positionTop,
  positionLeft,
  action,
  path = 'M91.572 0h185.105v640H91.572V0zm271.751 0h185.105v640H363.323V0z'
}) => (
  <Icon
    width={width}
    height={height}
    fill={fill}
    positionTop={positionTop}
    positionLeft={positionLeft}
    action={action}
    path={path}
  />
);

export default PauseButton;
