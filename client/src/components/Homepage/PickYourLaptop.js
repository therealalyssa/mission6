import Banner1 from "../img/Banner1.png";
import Quiz from '../Quiz';
import "./PickYourLaptop.css";


const PickYourLaptop = () => {
  return (
    <>
      <div className='pick-your-laptop-container'>
        <div className="pick-your-laptop-button">
          <Quiz />
        </div>
        <img className='pick-your-laptop-image' src={Banner1} alt="banner"></img>
      </div>
    </>
  )
}

export default PickYourLaptop