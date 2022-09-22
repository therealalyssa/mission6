// import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea, Rating } from "@mui/material";
// // import CustomerReviews from './CustomerReviews.json';
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Box } from "@mui/system";
// import "./ReviewCard.css";
// import NavigateLeftButton from "./../Homepage/NavigateLeftButton";
// import NavigateRightButton from "./../Homepage/NavigateRightButton";

// const ProductCard = () => {
//   const [reviews, setReviews] = useState([]);
//   // const [showMore, setShowMore] = useState(false);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5001/computers`)
//       .then((response) => {
//         setReviews(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <>
//       <Typography
//         variant="h6"
//         fontSize="1.5rem"
//         sx={{ marginLeft: "8.3rem", marginBottom: "3rem" }}
//       >
//         More Products For Your Business
//       </Typography>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-evenly",
//           alignItems: "center",
//         }}
//       >
//         <NavigateLeftButton />

//         {reviews.slice(0, 4).map((result) => {
//           return (
//             <Card
//               key={result._id}
//               sx={{ maxWidth: 250, height: 180, margin: 2 }}
//             >
//               <CardActionArea
//                 sx={{ display: "flex", flexDirection: "column", height: 140 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="100%"
//                   src={result.image}
//                   alt={result.name}
//                 />
//                 <CardContent>
//                   <Rating
//                     name="size-medium"
//                     value={Number(result.rating["$numberDecimal"])}
//                     precision={0.5}
//                     readOnly
//                   ></Rating>
//                   <br />
//                   <Typography
//                     variant="body3"
//                     fontSize="0.8rem"
//                     color="text.secondary"
//                   >
//                     {result.review}
//                   </Typography>
//                   <Typography
//                     gutterBottom
//                     variant="h6"
//                     component="div"
//                     fontSize="1.1rem"
//                   >
//                     {result.name}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           );
//         })}
//         <NavigateRightButton />
//       </Box>
//     </>
//   );
// };

// export default ProductCard;

import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import { useState, useEffect } from "react";
import NavigateLeftButton from "../Homepage/NavigateLeftButton";
import NavigateRightButton from "../Homepage/NavigateRightButton";
import { Link } from "react-router-dom";

const ProductCard = () => {
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <NavigateLeftButton />
          {computer.slice(5, 9).map((card) => {
            return (
              <Card
                key={card._id}
                className="card-container"
                sx={{
                  maxWidth: 220,
                  height: 400,
                  margin: 1,
                }}
                elevation={3}
              >
                <CardHeader />

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      height="140px"
                      width="120x"
                      margin="1px 2px 3px 41px"
                      src={card.image}
                      alt={card.name}
                    />

                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "20px",
                        fontWeight: "400",
                        textAlign: "center",
                        color: "#214F74",
                      }}
                    >
                      {card.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        textAlign: "center",
                        color: "#214F74",
                      }}
                    >
                      {card.price}
                    </Typography>

                    <CardActions sx={{ justifyContent: "center" }}>
                      <Link
                        to="/Productpage"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          onClick={() => console.log("add to cart")}
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
            );
          })}
          <NavigateRightButton />
        </Box>
      </div>
    </div>
  );
};

export default ProductCard;
