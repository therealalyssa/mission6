import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HPProbookLaptop1 from "../img/HPProbookLaptop1.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 200
//   }
// })

const card = [ //add product array
  { 
    price: "$1,234",
    rating: "5",
    name: "Apple 2022 MacBook Pro",
  }
]

const ProductCard = () => {
  return (
    <div>
      <div>
        <Card className="card-container" sx={{ maxWidth: 290, height: 400 }} elevation={3}>
          <CardHeader sx={{ height: 0 }}
            action={
              <IconButton onClick={() => console.log('favorite')}>
                <FavoriteBorderIcon />
              </IconButton>
            }
          />

            {/* {cards.map((card)) => <p> {card}}</p> )} */}

        <CardContent sx={{alignItems:'center'}} >
          {/* {cards.map((card) =>  */}
      
            <CardMedia
              component="img"
              height="184px"
              width="139px"
              margin="9px 2px 3px 41px"
              src={HPProbookLaptop1}
              alt="img"
            />
            <Typography gutterBottom variant="h5" component="div" style={{fontSize:"24px", fontWeight: "700"}}>
              $1,012 {card.price}
              <Rating name="read-only" defaultValue={3.5} precision={0.5} readOnly >
              </Rating>
            </Typography>

            <Typography variant="body1" style={{fontSize:"20px", fontWeight: "400"}}>
              HP Probook 450GB Business Laptop {card.name}
            </Typography>

            <CardActions>
              <Button className="add-to-cart"
                onClick={() => console.log('add to cart')}
                type="submit" 
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                style={{ backgroundColor: "#E2873C" }}
              >
              Add to Cart
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ProductCard