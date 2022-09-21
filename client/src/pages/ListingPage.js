import React from 'react';
import Header from '../components/Header/Header.js';
// import ProductGrid from '../components/ProductCard/ProductGrid.js';
import ProductCard from '../components/ProductCard/ProductCard.js';
import Footer from '../components/Footer';
// import Layout from '../components/ListingPage/Layout.js'

const ListingPage = ({ children }) => {
  return (
    <>
        {/* <Layout> */}
          <Header />
          {/* <ProductGrid /> */}
          <ProductCard />
          <Footer />
        {/* </Layout> */}
    </>
  )
}

export default ListingPage