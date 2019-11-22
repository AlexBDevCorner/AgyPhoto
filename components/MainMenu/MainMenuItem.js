import React, { useContext } from 'react';
import Link from 'next/link';

import { ThemeContext } from '../../contexts/Theme';

const MainMenuItem = ({ name, link, icon }) => {
  const { state } = useContext(ThemeContext);
  const { secondaryColor } = state;

  return (
    <>
      <Link href={`/${link}`}>
        <a>{name}</a>
      </Link>
      <style jsx>
        {`
          a {
            font-family: 'Montserrat';
            font-style: normal;
            font-size: 2rem;
            font-weight: 400;
            text-decoration: none;
            color: ${secondaryColor};
            margin-bottom: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default MainMenuItem;
