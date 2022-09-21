import React from "react";
import { Box } from "@mui/material";
import CustomerReviewCard from "./../Homepage/CustomerReviewCard";

const Reviews = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          float: "left",
          flexDirection: "column",
          width: "74%",
          length: "20%",
          border: "2px solid #3577A1",
        }}
      >
        <CustomerReviewCard></CustomerReviewCard>
      </Box>
    </>
  );
};

export default Reviews;
