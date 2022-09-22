import car from "../img/car.png";
import truck from "../img/truck.png";
import CardContent from '@mui/material/CardContent';
import { Box, Card, Typography } from '@mui/material'

const OurFulfilmentOptions = () => {
  return (
    <>
    <Typography variant="h6"  fontSize='1.5rem' sx={{marginLeft:'8.3rem', marginBottom:'1rem', marginTop:'5rem'}}>
    Our Fulfilment Options
    </Typography>

<Box sx={{ display:'flex', justifyContent:'center', marginBottom:'3rem'}}>

    <Box>
    <Card sx={{ width: 530, height: 120, margin: 4, display:'flex', justifyContent:'center', alignItems:'center'}}>

          <img style={{padding:'2rem'}}  src={car} alt='car'></img>

          <CardContent>

          <Typography gutterBottom variant="h6" fontSize='1.2rem' color="#14181F">
          Ready in one hour
          </Typography>
          
          <Typography variant="body3" fontSize='0.8rem' color="#14181F">
          click & collect today
          </Typography>

          </CardContent>
        </Card>
    </Box>

    <Box>
    <Card sx={{ width: 530, height: 120, margin: 4, display:'flex', justifyContent:'center', alignItems:'center'}}>

          <img style={{padding:'2rem'}}  src={truck} alt='car'></img>

          <CardContent>

          <Typography gutterBottom variant="h6" fontSize='1.2rem' color="#14181F">
          Next-Day Delivery
          </Typography>

          <Typography variant="body3" fontSize='0.8rem' color="#14181F">
          Ships within one day
          </Typography>

          </CardContent>
        </Card>
    </Box>

</Box>
</>
  )
}

export default OurFulfilmentOptions
