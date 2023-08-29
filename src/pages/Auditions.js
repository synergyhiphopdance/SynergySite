import React from "react";
import '../styles/Auditions.css'
import AuditionImage from '../assets/GroupPic2.jpg'

export const Auditions = () => {
    return (
      <div>
        <div className="AuditionFormat">
        <div className='BackgroundImage2'></div>

        <div className='AuditionText'>
          Synergy's Auditions 2023-2024<br></br>Located at O'Connel House<br></br>September 3rd @ 11am
          <br></br>
          <br></br>
          No Dance Experience is Required, <br></br>Just Bring Yourself and Some Water!
          <br></br>
          We Will Be Providing Drinks and Snacks Throughout As Well!
          <img src = {AuditionImage} className='AuditionsImage' ></img>
        </div>
        </div>
        
        
        
      </div>
    );
  };