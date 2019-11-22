import React from 'react';

const Title = ({ pageTitle, textColor }) => (
  <>
    <h1 data-test="page-title">{pageTitle}</h1>
    <style jsx>
      {`
        h1 {
          color: ${textColor};
        }
      `}
    </style>
  </>
);

export default Title;
