// @flow
import React from 'react';

type LogoProps = {
  fill: string
};

const Logo = ({ fill }: LogoProps) => (
  <>
    <svg data-test="logo-svg" height="50" width="200">
      <text x="0" y="35">
        OlivijaOwl
      </text>
    </svg>
    <style jsx>
      {`
        svg text {
          fill: ${fill};
          font-size: 2rem;
        }
      `}
    </style>
  </>
);

export default Logo;
