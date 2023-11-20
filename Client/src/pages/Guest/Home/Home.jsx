import React from 'react';

import Layout from '../../../utils/Layout';
import Hero from '../../../components/Hero/Hero';
import Collection from '../../../components/Collection/Collection';

function Home() {
  return (
    <Layout>
      <Hero />
      <Collection />
    </Layout>
  );
}

export default Home;
