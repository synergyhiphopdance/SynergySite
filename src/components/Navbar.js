import '../styles/NavBar.css'

import React, { useState, useEffect } from 'react';
import Logo from '../assets/whitelogo.png'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'


function Navbar() {
 

    return (
        <div className="navbar">
            <div className='leftSide'>
            <Link to ="/"> <img src={Logo}></img></Link>
                
            </div>
            <div className='rightSide'>
                <div className='nav-item'>
                    <Link to="/"> Home </Link>
                </div>
                <div className='nav-item'>
                    <Link to="/Auditions">2023-2024 Auditions</Link>
                </div>
                <div className='nav-item'>
                    <Link to="/Performances">Performances</Link>
                </div>
                <div className='nav-item'>
                    <Link to="/Team">Meet The Team</Link>
                </div>

                <i class='fab fa-typo3' />
            </div>
        </div>
    )
}

export default Navbar
