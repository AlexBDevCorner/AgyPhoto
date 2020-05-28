import React, { useReducer, useEffect } from 'react';

import Font from '../components/Font';
import Layout from '../components/Layout';

import Home from '../components/Home';
import MaintenanceMock from '../components/MaintenanceMock';

import {
  ThemeProvider,
  ThemeReducer,
  DefaultInitialState
} from '../contexts/Theme';

import { Client } from '../prismic-configuration';

const maintenance = true;

const Index = ({ images }) => {
  const [state, dispatch] = useReducer(ThemeReducer, DefaultInitialState);

  useEffect(() => {
    //Font();
  });

  const Content = maintenance ? <MaintenanceMock /> : <Home images={images} />;

  return (
    <>
      <ThemeProvider value={{ state, dispatch }}>
        <Layout data-test="app-layout" pageTitle="">
          {Content}
        </Layout>
      </ThemeProvider>
    </>
  );
};

export async function getStaticProps() {
  const prismicData = await Client().query(
    '[at(document.type, "mainpageimage")]'
  );

  const images = prismicData.results.map(im => im.data.image);

  console.log(images);

  return {
    props: {
      images
    }
  };
}

export default Index;
