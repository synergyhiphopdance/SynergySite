import React from "react";
import Kevin from '../assets/Kevin.jpg'
import '../styles/Team.css'

export const Team = () => {
  return (
    <div className="Overall">
      <div className="MeetFormat">
        <div className="TeamMember">
          <img src={Kevin} className='MemberPhoto' ></img>
          <div className="MemberText">
            Alicia Doung - Director <br></br>Class of 2024
          </div>
        </div>
        <div className="TeamMember">
          <img src={Kevin} className='MemberPhoto' ></img>
          <div className="MemberText">
            Jilliana Tumangan - Administrative Assistant Director <br></br>Class of 2024
          </div>
        </div>
        <div className="TeamMember">
          <img src={Kevin} className='MemberPhoto' ></img>
          <div className="MemberText">
            Abby Toscano - Assistant Director <br></br>Class of 2025
          </div>
        </div>

      </div>

      <div className="MeetFormat2">
        <div className="TeamMember">
          <img src={Kevin} className='MemberPhoto' ></img>
          <div className="MemberText">
            Kevin Ciardelli - Outreach Coordinator <br></br>Class of 2024
          </div>
        </div>
        <div className="TeamMember">
          <img src={Kevin} className='MemberPhoto' ></img>
          <div className="MemberText">
            Kaelyn Dillon -  Performance Manager<br></br>Class of 2025
          </div>
        </div>
        <div className="TeamMember">
          <img src={Kevin} className='MemberPhoto' ></img>
          <div className="MemberText">
            Bri Santoro - Treasurer <br></br>Class of 2026
          </div>
        </div>
      </div>
      <div className="MeetFormat3">
        <div className="TeamMember">
          <img src={Kevin} className='MemberPhoto' ></img>
          <div className="MemberText">
            Kerry Heslin - Social Chair <br></br>Class of 2024
          </div>
        </div>
        <div className="TeamMember">
          <img src={Kevin} className='MemberPhoto' ></img>
          <div className="MemberText">
            Caroline Hackett -  Media Chair<br></br>Class of 2026
          </div>
        </div>
      </div>
    </div>

  );
};