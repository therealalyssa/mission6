import React from 'react'
import "./ListingBanner.css";
import bannerImage from "../img/BeigeandSilverMinimalistHomeOfficeLinkedInBanner2.png";
// import { Link } from "react-router-dom";


const ListingBanner = () => {
  return (
    <div className='listing-banner-container'>

      <img className='listing-banner' src={bannerImage} alt="listing-banner"></img>
    
    </div>
  )
}

export default ListingBanner