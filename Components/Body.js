import React from 'react';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import ScrollToTopBtn from './ScrollToTopBtn';


function BodyComp(props){
    return (
        <div className="bodyComp">
            
            <About/>

            <Projects/>

            <Experience/>

            <div id="education" className="education">
                <h1>Education</h1>
            </div>

            <div id="contact" className="contact">
                <h1>Say hello!</h1>
            </div>

            <ScrollToTopBtn/>

        </div>
    )
}

export default BodyComp;