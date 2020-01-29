import React from 'react';
import mePic from '../static/img/me.jpg';
// import './logo.svg'
import '../static/css/About.css'
import '../static/css/styles.css'

const About =(props)=>{
    return(
        <div id = "About" className = "outside">
            <ul className = "flex-container">
                <li className = "image">
                    <img src={mePic} className="App-logo" alt="logo" /> 
                </li>
                <li className = "text">
                    <div className = "name">
                    Hi, I'm Raph.
                    </div>
                    <br/>
                    <div className = "descr">
                    Developer
                    </div>
                </li>

                
            </ul>
        </div>
    )
}

export default About;