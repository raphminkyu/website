import React from 'react';
import '../static/css/timeline.css'

const Timeline = ()=>{
    return(

        <div className = "outside" id ="TimelineEv">
           

           <div id = "TimelineIn">
            <h1 className = "title"> About </h1> 

            <section className = "line">

            </section>

            <div id = "mainLine">
            <section className = "timeline">
                <div class="line-heading">
                    <h2 class="line-heading-title">
                        Dickinson College
                    </h2>
                    <h3 class="line-heading-location">
                        Carlisle, U.S.
                    </h3>
                    <small class="line-heading-duration">
                        September 2018 - Present
                    </small>
                </div>
                <p class="line-details">
                texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                </p>
                
            </section>

            <br />

            <section className = "timeline">
                <h3 class="line-heading">
                    <span class="line-heading-title">
                        The SMIC Private School
                    </span>&#8211; 
                    <span class="line-heading-location">
                        Shanghai, China 
                    </span>
                    <small class="line-heading-duration">
                        ~2018
                    </small>
                </h3>
                <p>

                    texttext
                </p>

            </section>

            </div>


           

            <p> textettextextxetext</p>
            {/* <div style = {{margin:50}}>
                <div id = "timeFlex">
            
                    <div className = "timeline"></div>
                    

                </div>
            </div> */}

            </div>
                
            
        </div>

    )
}

export default Timeline;