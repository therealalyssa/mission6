import React from "react";
import { Box } from "@mui/material";
import CustomerReviewCard from "./../Homepage/CustomerReviewCard";

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
        <br></br>
        <Box fontSize="1rem" fontWeight="bold" color="#3577A1">
          Features
        </Box>
        <br></br>
        <Box fontSize="1rem" fontWeight="bold" color="#3577A1">
          Specifications
        </Box>
        <CustomerReviewCard></CustomerReviewCard>
      </Box>
    </>
  );
};

export default ProductInfo;
