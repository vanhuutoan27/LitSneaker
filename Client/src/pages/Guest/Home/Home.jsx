import React from 'react';

import Layout from '../../../utils/Layout';
import Hero from './Hero/Hero';
import Collection from './Collection/Collection';
import Trending from './Trending/Trending';
import About from './About/About';
import Feature from './Feature/Feature';
import Feedback from './Feedback/Feedback';
import Blog from './Blog/Blog';
import Subscribe from './Subscribe/Subscribe';

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
