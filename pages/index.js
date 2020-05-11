import React, { useReducer, useEffect } from 'react';
// import { useTransition, animated } from 'react-spring';

import Font from '../components/Font';
import Layout from '../components/Layout';

import Home from '../components/Home';
import MaintenanceMock from '../components/MaintenanceMock';

// import { Client } from '../prismic-configuration';

import {
  ThemeProvider,
  ThemeReducer,
  DefaultInitialState
} from '../contexts/Theme';

const maintenance = true;

const Index = ({ images }) => {
  const [state, dispatch] = useReducer(ThemeReducer, DefaultInitialState);

  useEffect(() => {
    Font();
  });

  const Content = maintenance ? <MaintenanceMock /> : <Home />;

  return (
    <>
      <ThemeProvider value={{ state, dispatch }}>
        <Layout data-test="app-layout" pageTitle="">
          {Content}
        </Layout>
      </ThemeProvider>
      <style jsx>
        {`
          #reconstruction {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          #reconstruction div {
            margin-top: 30px;
            display: flex;
            width: 140px;
            flex-direction: row;
            justify-content: space-between;
          }

          #reconstruction div:hover {
            cursor: pointer;
          }

          .msg {
            color: #F0FFFF;
            font-family: 'Exo 2';
            margin-bottom: 15px;
            padding-right: 10px;
            padding-left: 10px;
          }

          #home-section {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .column {
            height: 100%;
            width: 100%;
          }

          .main-column {
            width: 600px;
          }

          .main-column li {
            color: #526165;
            font-family: 'Exo 2';
          }

          .main-column li:hover {
            color: #99a3a6;
          }

          .content-column {
            background-color: white;
          }

          .about-me-column {
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          .about-me-text {
            height: 100%;
          }

          // .about-me-column picture {
          //   height: ${carouselImages[0].h}px;
          // }

          .two-column-grid-section {
            display: grid;
            grid-template-columns: 50vw 50vw;
            height: 100vh;
          }

          .home-page-info {
            display: grid;
            grid-template-columns: 50vw;
            grid-template-rows: 10vh 80vh 10vh;
            height: 100vh;
          }

          header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          header p {
            text-align: center;
            font-family: 'Exo 2';
            font-weight: 400;
            font-size: 2rem;
          }

          header h2 {
            text-align: center;
            font-family: 'Exo 2';
            font-weight: 400;
            font-size: 4rem;
          }

          @media screen and (max-width: 600px) {
            .two-column-grid-section {
              grid-template-columns: auto;
              height: 200vh;
            }

            .home-page-info {
              grid-template-columns: 100vw;
            }
          }

          .main-carousel-picture img {
            height: 100vh;
            width: 50vw;
            object-fit: cover;
            object-position: 20% 20%;
          }

          @media screen and (max-width: 600px) {
            .main-carousel-picture img {
              width: 100vw;
            }
          }

          .main-navigation {
            height: 10vh;
          }

          nav ul {
            display: flex;
            height: 10vh;
            align-items: center;
            justify-content: center;
          }

          nav ul li {
            list-style-type: none;
            margin: 0 2vw;
          }

          li a {
            text-decoration: none;
            color: black;
            font-family: 'Exo 2';
            font-size: 1.5rem;
          }

          .language-picker {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
          }

          .language-picker div {
            padding-bottom: 2vh;
            padding-right: 2vh;
          }

          #about-me-section {
            background: hsl(0, 0%, 7%);
            height: 100vh;
          }

          .about-me-story {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            height: 100vh;
          }

          .about-me-picture img {
            object-fit: cover;
            width: 1200px;
            height: 800px;
            border: solid;
            border-width: 15px;
            border-color: white;
          }

          @media screen and (max-width: 600px) {
            .about-me-story {
              width: 100vw;
              grid-template-columns: auto;
            }
          }

          .white-line {
            width: 100vw;
            height: 30px;
            background-color: white;
            position: relative;
            margin-bottom: 50px;
          }
        `}
      </style>
    </>
  );
};

// export async function getStaticProps() {
//   const prismicData = await Client().query(
//     '[at(document.type, "mainpageimage")]'
//   );

//   const images = prismicData.results.map(im => im.data.image);
//   return {
//     props: {
//       images
//     }
//   };
// }

export default Index;
