import { Box, Card, Typography } from '@mui/material'
import shopByBrandsData from "./shopByBrandsData.json";
import OurFulfilmentOptions from './OurFulfilmentOptions';


const ShopByBrands = () => {

  const returnedItem = shopByBrandsData.map((result) => {
    return (result.brand)
})

const arr = returnedItem;
console.log(arr);

const quickSort = (arr, length = arr.length - 1, start = 0) => {
  if (arr.length < 2) return arr // base case

  const pivot = arr[arr.length - 1]; //pivot value
  const left = [ ];  // left handside array
  const right = [ ]; // right handside array

 while (start < length) {  // comparing and pushing
      if (arr[start] < pivot){
        left.push(arr[start])
      }
      else {
        right.push(arr[start])
      }
     start++ //  incrementing start value
  }
          // calling quick sort recursively
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));
  return (
    <>
    <Typography variant="h6"  fontSize='2.3rem' sx={{marginLeft:'7rem',  padding:'1rem'}}>
    Shop by Brands
    </Typography>


    
  <Box

    sx={{
      width: '75vw',
      height: '30vh',
      marginLeft: '5rem',
      display:'flex', 
      flexDirection:'row', 
      justifyContent:'flex-end', 
      flexWrap:'wrap',
      padding: '1rem',
  }}
    >
      {shopByBrandsData.map((logos) => {
        return (
      <Box key={logos.brand}>
        <Card sx={{ width: 230, height: 50, margin: 4, display:'flex', justifyContent:'center', cursor:'pointer'}}>
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