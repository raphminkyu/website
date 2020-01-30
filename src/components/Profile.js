import React from 'react';
import mePic from '../static/img/me.jpg';
// import logo from '../static/img/dickinson.png';

import "../static/css/Profile.css";


const Profile = (props) =>{

    return (
            <div id = "profile">
                    <li className = "image">
                        <img src={mePic}  alt="raph" /> 
                    </li>
            </div>

                   
                   
               

    )
    
}

export default Profile;

