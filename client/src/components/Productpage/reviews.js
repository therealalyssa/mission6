import React from "react";
import { Box } from "@mui/material";
import ReviewCard from "./ReviewCard";

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
        <ReviewCard></ReviewCard>
      </Box>
    </>
  );
};

export default Reviews;
