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