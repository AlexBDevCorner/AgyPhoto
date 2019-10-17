// @flow
import React from 'react';
import Header from '../Header/Header';

const Layout = ({ children }: Object) => {
  return (
    <>
      <Header />
      {children}
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body {
            background-color: green;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
