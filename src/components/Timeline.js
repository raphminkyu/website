import React from 'react';
import '../static/css/timeline.css'
// import dickinson from '../static/img/dickinson.jpg';

const Timeline = ()=>{
    return(

        <div className = "outside" id ="TimelineEv">
           

           <div id = "TimelineIn">
            <h1 className = "title"> About </h1> 

            <section className = "line">

            </section>

            <div id = "timeline-main-box">
                {/* <div id = "mainLine"></div> */}
              

                <section className = "timeline">
                    
                    <div className = "timeline-content">
                    
                        <div className="line-heading">
                        
                            <h2 className="line-heading-title">
                                Dickinson College
                            </h2>
                            <h3 className="line-heading-location">
                                Carlisle, U.S.
                            </h3>
                            <small className="line-heading-duration">
                                September 2018 - Present
                            </small>
                        </div>
                        <p className="line-details">
                        Double majoring in Computer Science and Mathemetics. Graduating in May, 2022! I'm part of Student Investment Group (SIG), IdeaFund, and Martial Arts Club!
                        </p>

                    
                    </div>

                    <div className = "timeline-graduate-icon">
                      
                    </div>
                   

                </section>
              

              

                <section className = "timeline">
                    <div class = "timeline-content">
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
                    </div>
                    
                </section>
                <section className = "timeline"></section>

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