import React from 'react'
import Banner1 from "../img/Banner1.png";
import "./PickYourLaptop.css";
import { Button } from '@mui/material';

const PickYourLaptop = () => {
  return (
    <>
    <div className='pick-your-laptop-container'>
    <Button style={{ backgroundColor: "#3577A1", width: "12vw"}} 
    className="pick-your-laptop-button" variant="contained">Let's go!</Button>
    </div>
    <img className='pick-your-laptop-image' src={Banner1} alt="banner"></img>
    </>
  )
}

export default PickYourLaptop