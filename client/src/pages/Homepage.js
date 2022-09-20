import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/Homepage/HeroImage.js'
import LatestReleases from '../components/Homepage/LatestReleases.js'
import ShopByNeeds from '../components/Homepage/ShopByNeeds.js'
import ShopByBrands from '../components/Homepage/ShopByBrands.js'
import CustomerReviews from '../components/Homepage/CustomerReviews.js'
import PickYourLaptop from '../components/Homepage/PickYourLaptop'
import FloatingPageNavigationButton from '../components/FloatingPageNavigationButton'

const Homepage = () => {
  return (
    <>
        <FloatingPageNavigationButton></FloatingPageNavigationButton>
        <HeroImage />
        <LatestReleases />
        <ShopByNeeds />
        <ShopByBrands />
        <CustomerReviews />
        <PickYourLaptop />
        <Footer></Footer>
    </>
  )
}

export default Homepage