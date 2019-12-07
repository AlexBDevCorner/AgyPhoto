import React from 'react';

import Icon from './Icon';

const PlayButton = ({
  width,
  height,
  fill,
  positionTop,
  positionLeft,
  action,
  path = 'M560.109 317.531L79.891 640V0z'
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

export default PlayButton;
