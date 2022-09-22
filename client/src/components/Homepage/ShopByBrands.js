import { Box, Card, Typography } from '@mui/material'
import OurFulfilmentOptions from './OurFulfilmentOptions';
import axios from "axios";
import { useState, useEffect } from "react";


const ShopByBrands = () => {

  const [brands, setBrands] = useState([]);

  useEffect(() => {
      axios
          .get(`http://localhost:5001/brands`)
          .then((response) => {
              setBrands(response.data);
              // console.log(response.data);
          })
          .catch((error) => {
              console.log(error);
          });
  }, []);

  const returnedItem = brands.map((result) => {
    return (result)
})

const array = returnedItem;
console.log(array);

const quickSort = (array, length = array.length - 1, start = 0) => {
  if (array.length < 2) return array // base case

  const pivot = array[array.length - 1]; //pivot value last item in array
  const left = [ ];  // left handside array
  const right = [ ]; // right handside array

 while (start < length) {  // comparing and pushing
      if (array[start] < pivot){
        left.push(array[start])
      }
      else {
        right.push(array[start])
      }
     start++ 
  }
          
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(array));

const quickSortData = quickSort(array);

  return (
    <>
    <Typography variant="h6"  fontSize='2.3rem' sx={{marginLeft:'7rem',  padding:'1rem'}}>
    Shop by Brands
    </Typography>

  <Box

    sx={{
      width: '75vw',
      height: '30vh',
      marginLeft: '4rem',
      display:'flex', 
      flexDirection:'row', 
      justifyContent:'flex-end', 
      flexWrap:'wrap',
      padding: '1rem',
  }}
    >
      {quickSortData.map((logos) => {
        return (
      <Box key={logos.brand}>
        <Card sx={{ width: 220, height: 50, margin: 4, display:'flex', justifyContent:'center', cursor:'pointer'}}>
          <img key={logos.brand}  src={logos.img} alt={logos.brand}></img>
        </Card>
      </Box>
       )})}
    </Box>

 <OurFulfilmentOptions/>
    </>
  )
}

export default ShopByBrands