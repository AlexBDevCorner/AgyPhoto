import React, { useReducer, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

import Font from '../components/Font';
import Layout from '../components/Layout';
import Facebook from '../components/Facebook';

//import { Client } from '../prismic-configuration';

import {
  ThemeProvider,
  ThemeReducer,
  DefaultInitialState
} from '../contexts/Theme';
import { MainMenuProvider } from '../contexts/MainMenu';
import Instagram from '../components/Instagram';

const Index = ({ images }) => {
  const [state, dispatch] = useReducer(ThemeReducer, DefaultInitialState);

  useEffect(() => {
    Font();
  });

  // const transitions = useTransition(true, null, {
  //   from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  //   enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
  //   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  // });

  // console.log(images);
  // const imageLink = `${images[0].Desktop.url} 1200w`;
  // const sourceImage = `${images[0].url}`;

  // const carouselImages = images.map(x => {
  //   return {
  //     url: x.TEST.url,
  //     h: x.TEST.dimensions.height,
  //     id: x.TEST.url,
  //     alt: 'img0'
  //   };
  // });
  // console.log(carouselImages);

  return (
    <>
      <ThemeProvider value={{ state, dispatch }}>
        <MainMenuProvider>
          {/* {transitions.map(({ item, key, props }) => {
            return (
              item && (
                <animated.div key={key} style={props}> */}
          <Layout data-test="app-layout" pageTitle="">
            <section id="reconstruction">
              <p className="msg ru-msg">
                Привет! К сожалению сейчас сайт закрыт на реконструкцию. Скоро
                всё будет на месте, а пока-что со мной можно связаться в
                социальных сетях!
              </p>
              <p className="msg lv-msg">
                Labdien! Diemžēl saits ir aizvērts rekontrukcijas dēļ. Drīzumā
                viss būs savā vietā, pagaidām ar mani var sazināties sociālajos
                tīklos!
              </p>
              <p className="msg en-msg">
                Hello! Unfortunately site is closed due to reconstruction. Soon
                everything will be in place again, for now you can contact me in
                social networks!
              </p>
              <div>
                <Facebook />
                <Instagram />
              </div>
            </section>
            {/* <section id="home-section">
              <div className="column main-column">
                <nav>
                  <ul>
                    <li>Home</li>
                    <li>Gallery</li>
                    <li>About Me</li>
                  </ul>
                </nav>
              </div>
              <div className="column content-column">
                <div className="column about-me-column">
                  <div className="about-me-text">
                    <p>Hello! That is me!</p>
                  </div>
                  <picture>
                    <source
                      media="(min-width: 650px)"
                      srcSet={carouselImages[0].url}
                    />
                    <img src="img_orange_flowers.jpg" alt="Flowers" />
                  </picture>
                </div>
                <div className="column portrait-column"></div>
              </div>
              </section> */}
          </Layout>
          {/* </animated.div> */}
        </MainMenuProvider>
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
            color: #99a3a6;
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
