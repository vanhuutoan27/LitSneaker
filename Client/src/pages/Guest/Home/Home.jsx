import React from 'react';

import Layout from '../../../utils/Layout';
import Hero from '../../../components/Hero/Hero';
import Collection from '../../../components/Collection/Collection';
import Trending from '../../../components/Trending/Trending';
import About from '../../../components/About/About';
import Feature from '../../../components/Feature/Feature';
import Feedback from '../../../components/Feedback/Feedback';
import Blog from '../../../components/Blog/Blog';
import Subscribe from '../../../components/Subscribe/Subscribe';

function Home() {
  return (
    <Layout>
      <Hero />
      <Collection />
      <Trending />
      <About />
      <Feature />
      <Feedback />
      <Blog />
      <Subscribe />
    </Layout>
  );
}

export default Home;
