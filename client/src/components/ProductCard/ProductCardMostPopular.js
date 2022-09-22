import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from "axios";
import { useState, useEffect } from "react";
import NavigateLeftButton from '../Homepage/NavigateLeftButton';
import NavigateRightButton from '../Homepage/NavigateRightButton';
import { Link } from "react-router-dom";



const ProductCardMostPopular = () => {

const [computer, setComputer] = useState([]);

useEffect(() => {
  axios
    .get(`http://localhost:5001/products`)
    .then((response) => {
        setComputer(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);


  return (
    <div>
      <div>
      <Box  sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', 
      flexWrap:'wrap', alignItems:'center', marginBottom:'2rem'}}>

        <NavigateLeftButton/>
      {computer.slice(5, 9).map((card) => {
        return (
        <Card key={card._id} className="card-container" sx={{ maxWidth: 290, height: 400, margin: 3.3}} elevation={3}>
          <CardHeader sx={{ height: 0 }}
            action={
              <IconButton onClick={() => console.log('favorite')}>
                <FavoriteBorderIcon />
              </IconButton>
            }
          />

       <Box sx={{display:'flex', justifyContent:'center' }}>
  
        <CardContent>
      
            <CardMedia
              component="img"
              height="184px"
              width="139px"
              margin="9px 2px 3px 41px"
              src={card.image}
              alt={card.name}
            />
            
            <Typography gutterBottom variant="h5" component="div" style={{fontSize:"24px", fontWeight: "700", textAlign:'center'}}>
              {card.price}
              <Rating name="read-only" value={Number(card.rating['$numberDecimal'])}  precision={0.5} sx={{marginLeft:'1rem'}} readOnly >
              </Rating>
            </Typography>

            <Typography variant="body1" style={{fontSize:"20px", fontWeight: "400", textAlign:'center'}}>
            {card.name}
            </Typography>
            
            <CardActions sx={{ justifyContent:'center'}}>
            <Link to="/Productpage" style={{textDecoration:'none'}}>
              <Button 
                onClick={() => console.log('add to cart')}
                type="submit" 
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                style={{ backgroundColor: "#E2873C" }}
            
              >
              Add to Cart
              </Button>
              </Link>
            </CardActions>
          </CardContent>
          </Box>
        </Card>
          )})}
          <NavigateRightButton/>
          </Box>
      </div>
    </div>
  )
}

export default ProductCardMostPopular