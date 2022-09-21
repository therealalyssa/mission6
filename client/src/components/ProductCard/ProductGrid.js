// import React, { useEffect, useState } from 'react';
// import './App.css';
// // import ProductCard from './ProductCard';
// // import axios from "axios";
// import { Grid } from '@mui/material';
// import { Container } from '@mui/system';


// export default function ProductGrid() {

//   const [card, setCard] =useState([])

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5001/product`)
//       .then((response) => {
//           setProduct(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
 
//   return (
//     <Container>
//       <Grid container>
//         {/* {product.map(product => (
//           <Grid item key={product.id} xs={12} md={6} lg={4}> */}
//             <ProductCard />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   )
// }