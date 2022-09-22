import { Button } from "@mui/material";
import Banner1 from "../img/Banner1.png";
import Quiz from '../Quiz';
import "./PickYourLaptop.css";


const PickYourLaptop = () => {
  return (
    <>
      <div className='pick-your-laptop-container'>
        <div className="pick-your-laptop-button">
          
          <Button sx={{position:'absolute', marginBottom:'4rem', zIndex:'10'}}  
              style={{ color:'white', backgroundColor: "#3577A1", width: "12vw", height:"39px" }} 
              variant="contained" >Let's go!</Button>
          <Quiz />
          
        </div>
        <img className='pick-your-laptop-image' src={Banner1} alt="banner"></img>
      </div>
    </>
  )
}

export default PickYourLaptop