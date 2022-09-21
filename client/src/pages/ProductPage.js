import React from "react";
import Footer from "../components/Footer";
import Advertisment from "../components/Productpage/advertisement";
import ProductCarousel from "../components/Productpage/productCarousel";
import ProductInfo from "../components/Productpage/productInfo";
import Reviews from "../components/Productpage/reviews";

const Homepage = () => {
  return (
    <>
      <ProductCarousel></ProductCarousel>
      <Advertisment></Advertisment>
      <ProductInfo></ProductInfo>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
