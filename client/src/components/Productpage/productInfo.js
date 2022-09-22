import React from "react";
import { Box } from "@mui/material";
import CustomerReviewCard from "./../Homepage/CustomerReviewCard";
import ProductCard from "./productInfoCard";

const ProductInfo = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          float: "left",
          flexDirection: "column",
          width: "74%",
          height: "400px",
          border: "2px solid #3577A1",
        }}
      >
        <Box>
          <br></br>
        </Box>
        <Box>
          <br></br>
        </Box>
        <Box fontSize="1rem" fontWeight="bold" color="#3577A1">
          Features
        </Box>
        <br></br>
        <Box fontSize="1rem" fontWeight="bold" color="#3577A1">
          Specifications
        </Box>
        <Box>
          <br></br>
        </Box>
        <ProductCard></ProductCard>
      </Box>
      <Box>
        <br></br>
      </Box>
    </>
  );
};

export default ProductInfo;
