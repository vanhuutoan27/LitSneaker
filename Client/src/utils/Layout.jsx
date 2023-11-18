import React from 'react';

import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
