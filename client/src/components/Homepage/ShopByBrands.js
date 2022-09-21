import { Box, Card, Container, Typography } from '@mui/material'
import shopByBrandsData from "./shopByBrandsData.json";


const ShopByBrands = () => {
  return (
    <>
    <Typography variant="h6"  fontSize='2.3rem' sx={{marginLeft:'7rem',  padding:'1rem'}}>
    Shop by Brands
    </Typography>

    <Container>
    
  <Box
    sx={{
      width: '85vw',
      height: '30vh',
      display:'flex', flexDirection:'row', justifyContent:'space-evenly', flexWrap:'wrap',
      padding: '1rem',
  }}
    >
      {shopByBrandsData.map((logos) => {
        return (
      <Box key={logos.brand}>
        <Card key={logos.brand} sx={{ width: 230, height: 50, margin: 4, display:'flex', justifyContent:'center', cursor:'pointer'}}>
          <img src={logos.img} alt={logos.brand}></img>
        </Card>
      </Box>
       )})}
    </Box>

    </Container>

    <Typography variant="h6"  fontSize='1.5rem' sx={{marginLeft:'8.3rem', marginBottom:'4rem', marginTop:'4rem'}}>
    Our Fulfilment Options
    </Typography>
    </>
  )
}

export default ShopByBrands