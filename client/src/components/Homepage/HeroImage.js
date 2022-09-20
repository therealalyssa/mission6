import React from 'react'
import "./HeroImage.css";
import heroBackground from "../img/background.png";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";


const HeroImage = () => {
  return (
    <div className='hero-image-container'>

      <div spacing={2} className='hero-image-small-nav'>
      <Link className='hero-image-small-nav-text' to="/">Home</Link>
      <Link className='hero-image-small-nav-text'  to="/">Computer & Tablets {'>'} </Link>
      <Link className='hero-image-small-nav-text'  to="/">Laptops</Link>
      </div>

      <div className='hero-image-content'>
      <h1 className='hero-image-text'>Which Laptop is Right For You?</h1>
      <p>Take an easy quiz and find out in three quick steps!</p>
      <Button style={{ backgroundColor: "#3577A1", width: "12vw" }} variant="contained">Let's go!</Button>
      </div>

      <div>
        <img className='hero-image-image' src={heroBackground} alt="homepage-hero"></img>
      </div>
    </div>
  )
}

export default HeroImage