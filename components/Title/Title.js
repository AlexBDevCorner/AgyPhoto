// @flow
import React from 'react';

type TitleProps = { pageTitle: string, textColor: string };

const Title = ({ pageTitle, textColor }: TitleProps) => (
  <>
    <h1 data-test="page-title">{pageTitle}</h1>
    <style jsx>
      {` h1 {color: ${textColor}}`}
    </style>
  </>
);

export default Title;
