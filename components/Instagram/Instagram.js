import * as React from 'react';

const Instagram = ({ width = '50px' }) => {
  return (
    <>
      <svg
        viewBox="0 0 333333 333333"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        onClick={() => {
          window.open('https://www.instagram.com/olivija_owl/?hl');
        }}
      >
        <path
          d="M96206 1436h140927c52923 0 96200 42742 96200 94958v140546c0 52228-43278 94956-96198 94956l-140929-2C43283 331894 0 289166 0 236938V96392C0 44178 43283 1436 96206 1436zm69563 76009c51427 0 93159 41732 93159 93159 0 51433-41732 93159-93159 93159-51441 0-93167-41726-93167-93159 0-51427 41726-93159 93167-93159zm0 31467c34055 0 61694 27633 61694 61694s-27640 61700-61694 61700c-34067 0-61701-27639-61701-61700s27634-61694 61701-61694zm90128-44378c8354 0 15128 6774 15128 15120 0 8354-6774 15128-15128 15128-8348 0-15120-6774-15120-15128 0-8348 6774-15120 15120-15120zM107722 28430h117907c44273 0 80482 36029 80482 80059v118497c0 44028-36209 80051-80482 80051l-117907 2c-44273 0-80488-36023-80488-80051V108487c0-44028 36215-80057 80488-80057z"
          fill="##fdfdff"
        />
      </svg>
      <style jsx>
        {`
          svg {
            width: ${width};
          }
        `}
      </style>
    </>
  );
};

export default Instagram;
