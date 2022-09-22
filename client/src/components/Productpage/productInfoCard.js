import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Rating } from "@mui/material";
// import CustomerReviews from './CustomerReviews.json';
import axios from "axios";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import "./ReviewCard.css";
import NavigateLeftButton from "./../Homepage/NavigateLeftButton";
import NavigateRightButton from "./../Homepage/NavigateRightButton";

const ProductCard = () => {
  const [reviews, setReviews] = useState([]);
  // const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/computers`)
      .then((response) => {
        setReviews(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Typography
        variant="h6"
        fontSize="1.5rem"
        sx={{ marginLeft: "8.3rem", marginBottom: "3rem" }}
      >
        More Products For Your Business
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <NavigateLeftButton />

        {reviews.slice(0, 4).map((result) => {
          return (
            <Card
              key={result._id}
              sx={{ maxWidth: 250, height: 180, margin: 2 }}
            >
              <CardActionArea
                sx={{ display: "flex", flexDirection: "column", height: 140 }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  src={result.image}
                  alt={result.name}
                />
                <CardContent>
                  <Rating
                    name="size-medium"
                    value={Number(result.rating["$numberDecimal"])}
                    precision={0.5}
                    readOnly
                  ></Rating>
                  <br />
                  <Typography
                    variant="body3"
                    fontSize="0.8rem"
                    color="text.secondary"
                  >
                    {result.review}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    fontSize="1.1rem"
                  >
                    {result.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
        <NavigateRightButton />
      </Box>
    </>
  );
};

export default ProductCard;
