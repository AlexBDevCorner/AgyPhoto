import React from 'react';

const MenuIcon = () => (
  <>
    <div>
      <input type="checkbox" />
      <span className="line line1"></span>
      <span className="line line2"></span>
      <span className="line line3"></span>
    </div>
    <style jsx>
      {`
        div {
          width: 1rem;
          height: 50px;
          position: relative;
        }

        .line {
          position: absolute;
          height: 0.15rem;
          width: 2rem;
          background: white;
          border-radius: 8px;
        }

        .line1 {
          top: 30%;
        }

        .line2 {
          top: 50%;
        }

        .line3 {
          top: 70%;
        }
      `}
    </style>
  </>
);

export default MenuIcon;
