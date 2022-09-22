import React from 'react';
import Header from '../components/Header/Header.js';
import ProductGrid from '../components/ListingPage/ProductGrid.js';
import Footer from '../components/Footer';
// import Layout from '../components/ListingPage/Layout.js'

function ListingPage() {
  return (
    <>
        {/* <Layout> */}
          <Header />
          <ProductGrid />
          <Footer />
          {/* </Layout> */}
    </>
  )
}

export default ListingPage