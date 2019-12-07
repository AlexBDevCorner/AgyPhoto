import React from 'react';

const Icon = ({
  width,
  height,
  fill,
  positionTop,
  positionLeft,
  action,
  path
}) => (
  <>
    <svg
      onClick={() => action()}
      width={width}
      height={height}
      viewBox="0 0 640 640"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={fill}
    >
      <path d={path} fillRule="nonzero" />
    </svg>
    <style jsx>
      {`
        svg {
          position: absolute;
          top: ${positionTop};
          left: ${positionLeft};
        }
      `}
    </style>
  </>
);

export default Icon;
