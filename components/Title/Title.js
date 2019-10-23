// @flow
import React from 'react';

type TitleProps = { pageTitle: string };

const Title = ({ pageTitle }: TitleProps) => (
  <>
    <h1 data-test="page-title">{pageTitle}</h1>
  </>
);

export default Title;
