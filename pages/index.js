import React, { useReducer, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

import Font from '../components/Font';
import Layout from '../components/Layout/Layout';
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
    <ThemeProvider value={{ state, dispatch }}>
      <MainMenuProvider>
        {transitions.map(({ item, key, props }) => {
          return (
            item && (
              <animated.div key={key} style={props}>
                <Layout data-test="app-layout" pageTitle="">
                  <div style={{color: "white"}}>{"azaza"}</div>
                </Layout>
              </animated.div>
            )
          );
        })}
      </MainMenuProvider>
    </ThemeProvider>
  );
};

export default Index;
