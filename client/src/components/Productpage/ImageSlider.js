import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { Box, Fab } from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          size="small"
          sx={{ left: 40, color: "#111827", backgroundColor: "#F3F4F6" }}
          aria-label={"left"}
          onClick={prevSlide}
        >
          <ArrowBackIosIcon sx={{ fontSize: "medium" }} />
        </Fab>
      </Box>

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          size="small"
          sx={{ right: 40, color: "#111827", backgroundColor: "#F3F4F6" }}
          aria-label={"left"}
          onClick={nextSlide}
        >
          <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
        </Fab>
      </Box>
    </section>
  );
};

export default ImageSlider;
