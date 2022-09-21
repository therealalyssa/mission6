import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import shopData from './shopData.json'
import { Box, Container } from '@mui/system';


const ShopByNeedsCard = () => {

  return (
    <>
    <Box sx={{ position: 'relative'}} >
    <Container sx={{ display:'flex', flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap'}}>
    {shopData.map((data) => {
        return (
       <Card  key={data.id} sx={{ width: 310, height: 310, marginBottom: 4}}>
      
       <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }} >
        
    <Box 
        sx={{ display:'flex', 
        alignItems:'center', 
        flexDirection:'column', 
        alignSelf:'flex-start', 
        position: 'absolute', 
        marginTop:'1.5rem'}}>

          <Typography variant="body2" sx={{ color:'#E77C40', fontFamily:'Montserrat', fontWeight:'700'}} >
            {data.company}
          </Typography>

          <Typography gutterBottom variant="h5" sx={{ color:'white', fontFamily:'Montserrat', fontWeight:'700'}} component="div">
            {data.category}
          </Typography>

          <Typography variant="body2" sx={{ color:'white', fontFamily:'Montserrat', fontWeight:'700'}}>
            {data.product}
          </Typography>
    </Box>

        <CardMedia
          component="img"
          height="350"
          image={data.image}
          alt={data.category}
        />
    </Box>
    
    </Card>
    )})}
    </Container>
    </Box>
    </>
  )
}

export default ShopByNeedsCard
