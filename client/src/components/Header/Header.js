import React from 'react';
import "./Header.css";
import Topbar from './Topbar'
import Navbar from './Navbar'

function Header() {
    return (
        <div clasName="header">
            <Topbar />
            <Navbar />
        </div>
    )
}

export default Header;




// const Header = () => {
    
//     return (

//         <div className='header-container'>
  
//         <div className='top-bar-container'>
//             <a className='top-bar-text'>PB Tech</a>
//             <a className='top-bar-text'>Hardwired</a>
//             <a className='top-bar-text'>PB Business</a>
//             <a className='top-bar-text'>PB Education</a>
//             <a className='top-bar-text'>PB Wholesale</a>
//             <a className='top-bar-text'>PB Government</a>
//             <a className='top-bar-text'>PB Health</a>
//             <a className='top-bar-text'>PB IoT</a>
//             <a className='top-bar-text-right'>Get the PB Tech App</a>
//         </div>
        
//         <div className='navbar-container'>

//             <div className='navbar-row1'>
//                 <img style={{width:'152px', height:'29px'}} src={logo} className='logo' /> 
//                 <input style={{width:'985px', height:'37px'}}
//                 class='search-bar' type='text' id='search' placeholder='Search by keywords or part #'></input>
//                 <button>Sign In or Create Account</button>
//                 <button>Wish List</button>
//                 <button>cart-icon</button>
//             </div>

//             <div className='navbar-row2'>
//                 <a>menu</a>
//                 <a>Departments</a>
//                 <a>Brands</a>
//                 <a>Services</a>
//                 <a>Promotions</a>
//                 <a>Clearance</a>
//                 <a>New Arrivals</a>
//                 <a>Tax Free Shipping</a>
//                 <a>BYOD</a>
//                 <a>Returns & Warranty</a>
//                 <a>Careers</a>
//                 <a>Help & Support</a>
//                 <a>icon</a>
//                 <a>Stores</a>
//             </div>

//         </div>

//       </div>
//     )
//   }
  
//   export default Header