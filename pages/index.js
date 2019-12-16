import React, { useReducer, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

import Font from '../components/Font';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';

import {
  ThemeProvider,
  ThemeReducer,
  DefaultInitialState
} from '../contexts/Theme';
import { MainMenuProvider } from '../contexts/MainMenu';

const Index = () => {
  const [state, dispatch] = useReducer(ThemeReducer, DefaultInitialState);

  useEffect(() => {
    Font();
  });

  const transitions = useTransition(true, null, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  });

  return (
    <>
      <ThemeProvider value={{ state, dispatch }}>
        <MainMenuProvider>
          {transitions.map(({ item, key, props }) => {
            return (
              item && (
                <animated.div key={key} style={props}>
                  <Layout data-test="app-layout" pageTitle="">
                    <div className="grid-container">
                      <div className="flex-container">
                        <h2>Hello!</h2>
                      </div>
                      <picture>
                        <source
                          media="(min-width: 1190px)"
                          srcSet="../static/images/IMG_6978.jpg-600.jpg,
                                  ../static/images/IMG_6978.jpg-1200.jpg 2x"
                        />
                        <source
                          media="(min-width: 290px)"
                          srcSet="../static/images/IMG_6978.jpg-300.jpg,
                                  ../static/images/IMG_6978.jpg-600.jpg 2x"
                        />
                        <img
                          src="../static/images/IMG_6978.jpg-1500.jpg"
                          alt="Nice guy"
                        />
                      </picture>
                    </div>
                  </Layout>
                </animated.div>
              )
            );
          })}
        </MainMenuProvider>
      </ThemeProvider>
      <style jsx>
        {`
          .grid-container {
            display: grid;
            grid-template-columns: auto auto;
          }

          .flex-container {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          @media screen and (max-width: 600px) {
            .grid-container {
              grid-template-columns: auto;
            }
          }

          picture {
            justify-content: right;
            display: flex;
          }

          picture img {
            height: 100vh;
          }
        `}
      </style>
    </>
  );
};

export default Index;
