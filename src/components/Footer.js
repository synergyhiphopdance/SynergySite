import '../styles/Footer.css'

import React, { useState, useEffect } from 'react';
import Logo from '../assets/whitelogo.png'
import { Link } from 'react-router-dom'


function Footer() {
 

    return (
        <div className='Footer'>
            <img src={Logo} className='FooterImage'></img>
            <div className='FooterFont'>
                Contact: <br></br>Synergyhiphopdance@gmail.com<br></br>Boston College<br></br>617-515-0273
            </div>
            <div className='Names'>
            Alicia Doung, Director<br></br>
Abby Toscano, Assistant Director<br></br>
Jill Tumangan, Administrative Assistant Director<br></br>
Kevin Ciardelli, Outreach Coordinator
            </div>
        </div>
    )
}

export default Footer
