import React, { useState, useEffect } from 'react';
import Logo from '../assets/whitelogo.png'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

function Dropdown( props ) {

    const [ display, setDisplay ] = useState( 'none' )

    function handleClick() {

        if ( display == 'none' ) {

            setDisplay( 'block' )

        } else {

            setDisplay( 'none' )

        }

    }
}
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div className="navbar">
            <div className='leftSide'>
                <img src={Logo} />
            </div>
            <div className='rightSide'>
                <div className='nav-item'>
                    <Link to="/Auditions">Auditions</Link>
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
