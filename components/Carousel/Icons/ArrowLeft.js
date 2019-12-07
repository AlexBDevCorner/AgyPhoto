import React from 'react';

import Icon from './Icon';

const ArrowLeft = ({
  width,
  height,
  fill,
  positionTop,
  positionLeft,
  action,
  path = 'M484.093 579.196c13.82 14.197 13.512 36.863-.685 50.682-14.197 13.795-36.863 13.476-50.682-.709L155.99 343.788l25.69-24.98-25.796 25.016c-13.82-14.257-13.465-37.005.768-50.824.425-.402.838-.78 1.263-1.157l274.81-281c13.82-14.197 36.485-14.516 50.682-.72 14.197 13.818 14.504 36.496.685 50.68l-252.38 258.11 252.38 260.283z'
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

export default ArrowLeft;
