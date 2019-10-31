// @flow
import React from 'react';
import Link from 'next/link';

const MainMenuItem = ({ name, link }: { link: string, name: string }) => {
  return (
    <Link href={`/${link}`}>
      <a>{name}</a>
    </Link>
  );
};

export default MainMenuItem;
