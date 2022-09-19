import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import footerLogo from "./img/logo.png";
import "./Footer.css";
import { ListItemText } from '@mui/material';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>

      <AppBar
        position="relative"
        style={{ backgroundColor: "#313131" }}
        sx={{ top: 'auto', bottom: 0 }}
      >

        <Toolbar className='footer-list-tool-bar' sx={{ alignItems: "flex-start", justifyContent: "space-around" }}>

          <div color="inherit" className='footer-list-grid'>
            <ListItemText style={{ color: "#999999" }} className='footer-list-item'>Shop by DEPARTMENT</ListItemText>
            <ListItemText className='footer-list-item-text'>Computers</ListItemText>
            <ListItemText className='footer-list-item-text'>PC Parts</ListItemText>
            <ListItemText className='footer-list-item-text'>Printing & Office</ListItemText>
            <ListItemText className='footer-list-item-text'>TV & AV</ListItemText>
            <ListItemText className='footer-list-item-text'>Gaming</ListItemText>
            <ListItemText className='footer-list-item-text'>Smart Home & Security</ListItemText>
            <ListItemText className='footer-list-item-text'>More</ListItemText>
            <ListItemText className='footer-list-item-text'>Apple</ListItemText>
            <ListItemText className='footer-list-item-text'>PC Peripherals & Accessories</ListItemText>
            <ListItemText className='footer-list-item-text'>Networking</ListItemText>
            <ListItemText className='footer-list-item-text'>Phones & Accessories</ListItemText>
            <ListItemText className='footer-list-item-text'>Headphones & Audio</ListItemText>
            <ListItemText className='footer-list-item-text'>Camera & Drones</ListItemText>
            <ListItemText className='footer-list-item-text'>Toys, Hobbies & STEM</ListItemText>
            <ListItemText className='footer-list-item-text'>Gift Ideas</ListItemText>
          </div>

          <div color="inherit" className='footer-list-grid'>
            <ListItemText style={{ color: "#999999" }} className='footer-list-item'>Company Info</ListItemText>
            <ListItemText className='footer-list-item-text'>About Us</ListItemText>
            <ListItemText className='footer-list-item-text'>Business</ListItemText>
            <ListItemText className='footer-list-item-text'>Education</ListItemText>
            <ListItemText className='footer-list-item-text'>Wholesale</ListItemText>
            <ListItemText className='footer-list-item-text'>Government</ListItemText>
            <ListItemText className='footer-list-item-text'>Health</ListItemText>
            <ListItemText className='footer-list-item-text'>Stores</ListItemText>
            <ListItemText className='footer-list-item-text'>Careers</ListItemText>
            <ListItemText className='footer-list-item-text'>Contact Us</ListItemText>
            <ListItemText className='footer-list-item-text'>News</ListItemText>
            <ListItemText className='footer-list-item-text'>Terms & Conditions</ListItemText>
            <ListItemText className='footer-list-item-text'>Privacy Policy</ListItemText>
          </div>

          <div color="inherit" className='footer-list-grid'>
            <ListItemText style={{ color: "#999999" }} className='footer-list-item'>Services & Support</ListItemText>
            <ListItemText className='footer-list-item-text'>Help</ListItemText>
            <ListItemText className='footer-list-item-text'>Returns & Warranty</ListItemText>
            <ListItemText className='footer-list-item-text'>Finance</ListItemText>
            <ListItemText className='footer-list-item-text'>IT Services</ListItemText>
            <ListItemText className='footer-list-item-text'>Home Services</ListItemText>
            <ListItemText className='footer-list-item-text'>Job Tracker</ListItemText>
            <ListItemText className='footer-list-item-text'>Service Parts</ListItemText>
            <ListItemText className='footer-list-item-text'>System Builder</ListItemText>
          </div>

          <div color="inherit" className='footer-list-grid'>
            <ListItemText style={{ color: "#999999" }} className='footer-list-item'>Promotions & Offers</ListItemText>
            <ListItemText className='footer-list-item-text'>Promotions</ListItemText>
            <ListItemText className='footer-list-item-text'>Clearance</ListItemText>
            <ListItemText className='footer-list-item-text'>New Arrivals</ListItemText>
            <ListItemText className='footer-list-item-text'>BYOD</ListItemText>
            <ListItemText className='footer-list-item-text'>Tax Free Shipping</ListItemText>
            <ListItemText className='footer-list-item-text'>Events</ListItemText>
            <ListItemText className='footer-list-item-text'>PB Insider</ListItemText>
            <ListItemText className='footer-list-item-text'>PB Advisor</ListItemText>
          </div>

          <div className='footer-list-grid'>
            <ListItemText style={{ color: "#999999" }} className='footer-list-item'>Become a PB Insider</ListItemText>

              <IconButton disableRipple sx={{ alignItems: "flex-end", justifyContent: "flex-end" }} >
                <Link to="/">
                  <img className='footer-logo' src={footerLogo} alt="PB Tech logo" />
                </Link>
              </IconButton>

          </div>

        </Toolbar>

      </AppBar>
    </>
  );
}

export default Footer