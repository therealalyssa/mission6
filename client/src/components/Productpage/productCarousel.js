import React from "react";
import { Box, ImageList, Button } from "@mui/material";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import "./ProductCarousel.css";
import "./../Homepage/HeroImage.css";
import { Link } from "@mui/material";
import GP from "./../img/gp.png";
import ImageListItem from "@mui/material/ImageListItem";
import Rating from "@mui/material/Rating";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCarousel = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          float: "left",
          flexDirection: "column",
          width: "74%",
          height: "600px",
          padding: "0px",
        }}
      >
        <div spacing={2} className="hero-image-small-nav2">
          <Link className="hero-image-small-nav-text2" to="/">
            Home {">"}{" "}
          </Link>
          <Link className="hero-image-small-nav-text2" to="/">
            Computer & Tablets {">"}{" "}
          </Link>
          <Link className="hero-image-small-nav-text2" to="/">
            Laptops {">"}{" "}
          </Link>
          <Link className="hero-image-small-nav-text2" to="/">
            Business Laptops {">"}{" "}
          </Link>
          <Link className="hero-image-small-nav-text2" to="/">
            HP Probook
          </Link>
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <ImageList
            sx={{
              width: "300px",
              height: "50x",
              display: "flex",
              justifyContent: "flex-start",
              padding: "40px 0px 0px 0px",
            }}
          >
            <ImageListItem>
              <img
                src={GP}
                alt="hey"
                sx={{ display: "flex", justifyContent: "flex-start" }}
              />
            </ImageListItem>
          </ImageList>
        </Box>
        <ImageSlider slides={SliderData} />
        <Box className="rightsidetext">
          <Box fontSize="1.6rem" fontWeight="bold" color="black">
            HP Probook 450 G8
          </Box>
        </Box>
        <Box className="rightsidetext2">
          <Box fontSize="1.6rem" fontWeight="bold" color="black">
            Business Laptop
          </Box>
        </Box>
        <Box className="rightsidetext3">
          <Box ontSize="1.6rem" fontWeight="bold" color="orange">
            {" "}
            $1,534{" "}
          </Box>
          <Box>
            <Rating name="half-rating" defaultValue={5} precision={0.5} />
          </Box>
        </Box>
        <Box className="rightsidetext4">
          <Box fontSize="1.6rem" fontWeight="bold" color="black">
            {" "}
            Quantity button:
          </Box>
        </Box>
        {/* <Box className="quantitybtn" sx={{ marginLeft: "20 rem" }}>
          <FormControl>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
        </Box> */}

        <Box className="rightsidetext5">
          <Box>
            {" "}
            <Button
              className="add-to-cart"
              onClick={() => console.log("add to cart")}
              type="submit"
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              style={{ backgroundColor: "#E2873C" }}
            >
              Add to Cart
            </Button>
            <Button
              variant="large"
              className="add-to-cart"
              onClick={() => console.log("add to cart")}
              type="submit"
              startIcon={<FavoriteBorderIcon />}
              style={{ color: "red", height: "2vw", width: "7vw" }}
            ></Button>
          </Box>
        </Box>
        <Box className="rightsidetext6">
          <Box fontSize="1" fontWeight="bold" color="black">
            {" "}
            Shipping: Typically arrives 2-3 working days
          </Box>
        </Box>
        <Box className="rightsidetext7">
          <Box fontSize="1" fontWeight="bold" color="black">
            {" "}
            Click & Collect: Available from 4 stores{" "}
          </Box>
        </Box>
        <Box className="rightsidetext8">
          <Box fontSize="1" fontWeight="bold" color="black">
            {" "}
            Returns: We offer a 7 day exchange policy
          </Box>
        </Box>
        <Box className="rightsidetext9">
          <Box fontSize="1" fontWeight="bold" color="black">
            {" "}
            Warranty:12months{" "}
          </Box>
        </Box>
        {/* <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul> */}
      </Box>

      <Box
        className="quantitybtn"
        sx={{ position: "absolute", marginTop: "20 rem" }}
      >
        <FormControl>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default ProductCarousel;
