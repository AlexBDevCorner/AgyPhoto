import React, { useReducer, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

import Font from '../components/Font';
import Layout from '../components/Layout';
import Logo from '../components/Logo';

import { Client } from '../prismic-configuration';

import {
  ThemeProvider,
  ThemeReducer,
  DefaultInitialState
} from '../contexts/Theme';
import { MainMenuProvider } from '../contexts/MainMenu';

const Index = ({ stars }) => {
  const [state, dispatch] = useReducer(ThemeReducer, DefaultInitialState);

  useEffect(() => {
    Font();
  });

  const transitions = useTransition(true, null, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  });
  console.log(stars);
  return (
    <>
      <ThemeProvider value={{ state, dispatch }}>
        <MainMenuProvider>
          {transitions.map(({ item, key, props }) => {
            return (
              item && (
                <animated.div key={key} style={props}>
                  <Layout data-test="app-layout" pageTitle="">
                    <section id="home-section">
                      <Logo width="500px" />
                    </section>
                    <section id="about-me-section">
                      <div className="about-me-story">
                        <div className="white-line">
                          <picture className="about-me-picture">
                            <source
                              media="(min-width: 650px)"
                              srcSet="../static/images/IMG_6214.jpg-1280.jpg 1200w"
                            />
                            <source
                              media="(min-width: 290px)"
                              srcSet="../static/images/IMG_6214.jpg-600.jpg 600w"
                            />
                            <source
                              media="(max-width: 289px)"
                              srcSet="../static/images/IMG_6214.jpg-300.jpg 300w"
                            />
                            <img
                              src="../static/images/IMG_6214.jpg-1500.jpg"
                              alt="Nice girl"
                            />
                          </picture>
                        </div>
                      </div>
                    </section>
                  </Layout>
                </animated.div>
              )
            );
          })}
        </MainMenuProvider>
      </ThemeProvider>
      <style jsx>
        {`
          #home-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

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

          .about-me-picture {
            position: absolute;
            right: 30%;
            bottom: -10%;
          }

          .about-me-picture img {
            object-fit: cover;
            width: 300px;
            height: 600px;
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

export async function getStaticProps() {
  const home = await Client().query('[at(document.id, XqQg0xEAACIAaNkn")]');
  return {
    props: {
      stars: home
    }
  };
}

export default Index;
