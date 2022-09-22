import React from 'react'
import "./ListingBanner.css";
import bannerImage from "../img/BeigeandSilverMinimalistHomeOfficeLinkedInBanner2.png";
import { Button } from '@mui/material';
// import { Link } from "react-router-dom";


const ListingBanner = () => {
  return (
    <div className='listing-banner-container'>

      <img className='listing-banner' src={bannerImage} alt="listing-banner"></img>
      <Button>Apply for business account</Button>

    </div>
  )
}

export default ListingBanner