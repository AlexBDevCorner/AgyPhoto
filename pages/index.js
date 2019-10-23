// @flow
import React, { useReducer } from 'react';

import Layout from '../components/Layout/Layout';
import {
  ThemeProvider,
  ThemeReducer,
  DefaultInitialState
} from '../contexts/Theme';

const Index = () => {
  const [state, dispatch] = useReducer(ThemeReducer, DefaultInitialState);

  return (
    <ThemeProvider value={{ state, dispatch }}>
      <Layout data-test="app-layout" />
    </ThemeProvider>
  );
};

export default Index;
