import React from 'react';

const HamburgerIconSVG = ({ width = 32, height = 32, fill }) => (
  <>
    <svg
      width={width}
      height={height}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 640 640"
      fill={fill}
    >
      <path d="M639.965 82.56c-129.734-.035-510.16 0-639.965 0v93.12h639.965V82.56zM.036 464.368h639.929L640 557.44c-213.31 0-426.655.012-639.965.012v-93.084zm.012-190.904c213.298 0 426.608-.024 639.917-.024l.023 93.12H.048v-93.096z" />
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

export default HamburgerIconSVG;
