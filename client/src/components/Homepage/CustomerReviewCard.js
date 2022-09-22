import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Rating } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import "./CustomerReviewCard.css";
import NavigateLeftButton from "./NavigateLeftButton";
import NavigateRightButton from "./NavigateRightButton";
import "react-multi-carousel/lib/styles.css";

const CustomerReviewCard = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/reviews`)
      .then((response) => {
        setReviews(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
<>

    <Typography variant="h6"  fontSize='1.5rem' sx={{marginLeft:'8.3rem', marginBottom:'2rem'}}>
    Read What Our Customers Have To Say
    </Typography>
    

    <Box  sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', alignItems:'center', marginBottom:'2rem'}}>
    

    <NavigateLeftButton/>


    {reviews.slice(0, 3).map((result) => {
        return (
    
    <Card key={result._id} sx={{ maxWidth: 380, height: 150, margin: 2}}>
    
    <CardActionArea sx={{ display: 'flex', flexDirection: 'row', height: 150}}>
      <CardMedia
        component="img"
        height="100%"
        src={result.img}
        alt={result.name}
      />
      <CardContent>

      <Rating name="size-medium" value={Number(result.rating['$numberDecimal'])} precision={0.5} readOnly ></Rating>
      <br/>
        <Typography variant="body3" fontSize='0.8rem' color="text.secondary">
        {result.review}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" fontSize='1.1rem'>
        {result.name}
        </Typography>
    
      </CardContent>
      
    </CardActionArea>

  </Card>

   )})}
   <NavigateRightButton/>
  </Box>
  {/* <Pagination count={2} sx={ { display: 'flex' , justifyContent: 'center'}} ></Pagination> */}
  </>
);
}

export default CustomerReviewCard

