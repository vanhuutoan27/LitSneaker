import React from 'react';

import Layout from '../../../utils/Layout';
import Hero from '../../../components/Hero/Hero';
import Collection from '../../../components/Collection/Collection';
import Trending from '../../../components/Trending/Trending';

function Home() {
  return (
    <Layout>
      <Hero />
      <Collection />
      <Trending />
    </Layout>
  );
}

export default Home;
