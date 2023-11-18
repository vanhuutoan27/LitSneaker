import React from 'react';

import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
