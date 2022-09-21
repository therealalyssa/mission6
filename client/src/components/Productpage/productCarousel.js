import React from "react";
import { Box } from "@mui/material";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import "./ProductCarousel.css";

const ProductCarousel = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          float: "left",
          flexDirection: "column",
          width: "74%",
          height: "500px",
          border: "2px solid #3577A1",
        }}
      >
        <Box>Hi</Box>
        <ImageSlider slides={SliderData} />
        <Box> Advertisement</Box>
        <Box> Advertisement</Box>
      </Box>
    </>
  );
};

export default ProductCarousel;
