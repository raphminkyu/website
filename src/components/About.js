import React from 'react';
import HoverD from './micel/hoverDickinson.js';

// import './logo.svg'
import '../static/css/About.css'
import '../static/css/styles.css'

import Profile from "./Profile.js";

const About =(props)=>{
    return(
        <div id = "About" className = "outside">
            <ul className = "flex-container">
                

                    <ul className = "text">
                    
                        <h1 id = "name">
                            Hey, I'm Raph. 
                        </h1>
                       

                        <h3 id = "intro">
                            I'm an aspiring developer anxious to explore the real world full of mysteries and challenges  
                        </h3>

                        <div id = "line">

                        </div>
                        <li id = "descr">

                        </li>
                        <p>
                            I'm a student at <HoverD /> Dickison College.
                        text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text 
                        </p>
                    </ul>
                    <Profile />


                
            </ul>
        </div>
    )
}

export default About;