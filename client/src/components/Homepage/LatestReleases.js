import { Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from "react-router-dom";

const LatestReleases = () => {
  return (
    <>
    <Typography variant="h6"  fontSize='2.3rem' sx={{marginLeft:'7rem',  padding:'1rem'}}>
    Latest Releases
    </Typography>
    <Link to="/Productpage">
    </Link>
    <ProductCard></ProductCard>
    </>
  )
}

export default LatestReleases