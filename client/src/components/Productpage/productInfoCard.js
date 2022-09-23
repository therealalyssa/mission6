import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

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
      .get(`http://localhost:5001/suggestions`)
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
        <Typography
          variant="h6"
          fontSize="1.5rem"
          sx={{ marginLeft: "8.3rem", marginBottom: "2rem" }}
        >
          More Products For Your Business
        </Typography>
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
          {computer.map((card) => {
            return (
              <Card
                key={card._id}
                className="card-container"
                sx={{
                  maxWidth: 221,
                  height: 300,
                  margin: 1,
                }}
                elevation={3}
              >
                <CardHeader />

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      height="85px"
                      width="60px"
                      // margin="1px 2px 3px 41px"
                      src={card.image}
                      alt={card.name}
                    />

                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "15px",
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
                        fontSize: "15px",
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
