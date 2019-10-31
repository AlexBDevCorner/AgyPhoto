// @flow
import React from 'react';

type IconProps = {
  fill: string,
  isMenuOpen: boolean,
  setIsMenuOpen: any
};

const HamburgerIcon = ({ fill, isMenuOpen, setIsMenuOpen }: IconProps) => {
  return (
    <>
      {!isMenuOpen ? (
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 640 640"
        >
          <path
            d="M639.965 82.56c-129.734-.035-510.16 0-639.965 0v93.12h639.965V82.56zM.036 
              464.368h639.929L640 557.44c-213.31 0-426.655.012-639.965.012v-93.084zm.012-190.904c213.298 0 
              426.608-.024 639.917-.024l.023 93.12H.048v-93.096z"
          />
        </svg>
      ) : (
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2541 2541"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path
            d="M29 172c-39-39-39-103 0-142s103-39 142 0l1099 1099L2369 30c39-39 103-39 142 0s39 
              103 0 142L1412 1271l1099 1099c39 39 39 103 0 142s-103 39-142 0L1270 1413 171 2512c-39 
              39-103 39-142 0s-39-103 0-142l1099-1099L29 172z"
            fillRule="nonzero"
          />
        </svg>
      )}

      <style jsx>
        {`
          svg {
            fill: ${fill};
            width: 30px;
            height: 30px;
          }
        `}
      </style>
    </>
  );
};

export default HamburgerIcon;
