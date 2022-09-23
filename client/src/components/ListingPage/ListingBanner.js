import React from 'react'
import "./ListingBanner.css";
import bannerImage from "../img/BeigeandSilverMinimalistHomeOfficeLinkedInBanner2.png";
// import { Button, Topography } from '@mui/material';
// import { Link } from "react-router-dom";


const ListingBanner = () => {
  return (
    <div className='listing-banner-container'>

      <img className='listing-banner' src={bannerImage} alt="listing-banner"></img>
      {/* <Button>Apply for business account</Button> */}

      {/* <Topography>
        <Button 
          style={{ 
            color:"white", 
            backgroundColor: "#3577A1", 
            width: "173px",
            height: "32px",
            paddingLeft: "603px",
            marginTop: "1972px",
              // position: "absolute"
          }} 
          variant="contained" 
        >
        Apply for business account
        </Button>
      </Topography> */}
    </div>
  )
}

export default ListingBanner