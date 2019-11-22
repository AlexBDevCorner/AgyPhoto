import React from 'react';

const CloseMenuIconSVG = ({ width = 32, height = 32, fill }) => (
  <>
    <svg
      width={width}
      height={height}
      viewBox="0 0 2541 2541"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={fill}
    >
      <path
        d="M29 172c-39-39-39-103 0-142s103-39 142 0l1099 1099L2369 30c39-39 103-39 142 0s39 103 0 142L1412 1271l1099 1099c39 39 39 103 0 142s-103 39-142 0L1270 1413 171 2512c-39 39-103 39-142 0s-39-103 0-142l1099-1099L29 172z"
        fillRule="nonzero"
      />
    </svg>
    <style jsx>
      {`
        svg {
          position: absolute;
        }
      `}
    </style>
  </>
);

export default CloseMenuIconSVG;
