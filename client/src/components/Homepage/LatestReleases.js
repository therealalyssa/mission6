import {  Box, Typography } from '@mui/material'
import React from 'react'
import ProductCardMostPopular from '../ProductCard/ProductCardMostPopular'
import ProductCardNewReleases from '../ProductCard/ProductCardNewReleases'

const LatestReleases = () => {
  return (
    <>
    <div>
    <Typography variant="h6"  fontSize='2.3rem' sx={{marginLeft:'7rem',  padding:'1rem'}}>
    Latest Releases
    </Typography>
    <Box sx={{ display: 'flex', justifyContent:'space-evenly'}}>
    <ProductCardNewReleases/>
    </Box>
    </div>

    <div>
    <Typography variant="h6"  fontSize='2.3rem' sx={{marginLeft:'7rem',  padding:'1rem'}}>
    Most Popular
    </Typography>
    <Box sx={{ display: 'flex', justifyContent:'space-evenly'}}>
    <ProductCardMostPopular/>
    </Box>
    </div>

    </>
  )
}

export default LatestReleases