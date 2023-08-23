import React from 'react'
import '../styles/LandingPage.css'
import GroupPic from '../assets/GroupPic.png'
import LandingPicture from '../assets/LandingPicture.jpg'

export const LandingPage = () => {
  return (
    <div>
      <div className='BackgroundImage'></div>
      <div className='LandingPageLayout'>

        <div className='LandingText'>
          Welcome To <br></br>Synergy Hip Hop Dance Company<br></br>Bio
        </div>

        <img src = {LandingPicture} className='Photo' ></img>
      </div>
      <div className='SecondSection'>
        Here
      </div>
    </div>
  );
};
