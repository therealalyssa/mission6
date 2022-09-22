import React from 'react';
import Header from '../components/Header/Header.js';
import Layout from '../components/ListingPage/Layout.js';
import Footer from '../components/Footer';

function ListingPage() {
  return (
    <>
        {/* <Layout> */}
          <Header />
          <Layout />
          <Footer />
          {/* </Layout> */}
    </>
  )
}

export default ListingPage