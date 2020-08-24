import React, { useContext } from 'react';

import Header from '../Header';
import MainMenu from '../MainMenu';

import { ThemeContext } from '../../contexts/Theme';

const testConfig = [
  {
    name: 'Home',
    link: ''
  },
  {
    name: 'Gallery',
    link: 'gallery'
  },
  {
    name: 'About me',
    link: 'about_me'
  }
];

const Layout = ({ pageTitle, children }) => {
  const { state } = useContext(ThemeContext);
  const { mainColor } = state;

  return (
    <>
      <div className="home-container">
        <nav className="sidebar">
          <div className="logo-text">@OLIVIJA_OWL</div>
          <ul>
            <li>Home</li>
            <li>Galleries</li>
            <li>About Me</li>
            <li>Contacts</li>
          </ul>
        </nav>
        <div className="main-content">{children}</div> 
      </div>
      <style jsx global>
        {`
          :root {
            --global-padding: 100px;
            --sidebar-width: 500px;
          }
          
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
            background-color: ${mainColor};
            overflow-x: hidden;
            font-family: 'Exo 2', sans-serif;
            margin-top: 60px;
            padding-right: var(--global-padding);
          }

          .sidebar {
            z-index: 1;
            position: fixed;
            width: var(--sidebar-width);
            height: 100vh;
            top: 0;
            left: 0;
            overflow-x: hidden;
            padding-top: 60px;
            padding-left: var(--global-padding);
          }

          .sidebar ul {
            list-style-type: none;
            padding-top: 48px;
            font-size: 17px;
          }

          .sidebar ul li {
            padding-top: 24px;
          }

          .main-content {
            margin-left: var(--sidebar-width);
          }

          .logo-text {
            font-family: 'Quicksand', sans-serif;
            font-size: 32px;
            letter-spacing: 3px;
          }

          @media screen and (max-width: 1000px) {
            body {
              background-color: ${mainColor};
              overflow-x: hidden;
              font-family: 'Exo 2', sans-serif;
              margin-top: 30px;
              padding-right: 0px;
              min-width: 620px;
            }

            .sidebar {
              display: flex;
              flex-direction: column;
              align-items: center;
              z-index: 0;
              position: relative;
              width: 100vw;
              height: 20vh;
              top: 0;
              left: 0;
              overflow-x: hidden;
              padding-top: 0px;
              padding-left: 0px;
            }
  
            .sidebar ul {
              display: flex;
              list-style-type: none;
              padding-top: 0px;
              font-size: 17px;
            }
  
            .sidebar ul li {
              padding: 20px;
            }

            .main-content {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Layout;
