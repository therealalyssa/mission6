import { Typography, Box } from '@mui/material'
import React from 'react'
import ShopByNeedsCard from './ShopByNeedsCard'

const ShopByNeeds = () => {
  return (
    <>
    <Box
      sx={{
        width: '100vw',
        height: '850px',
        backgroundColor: '#F0E9E673',
        marginBottom: '1rem'
      }}>
    <Typography variant="h6"  fontSize='2.3rem' sx={{marginLeft:'7rem',  padding:'1.5rem'}}>
    Shop by Needs
    </Typography>
    <ShopByNeedsCard/>
    </Box>
    </>
  )
}

export default ShopByNeeds