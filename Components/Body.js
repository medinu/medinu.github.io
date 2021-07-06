import React from 'react';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import ScrollToTopBtn from './ScrollToTopBtn';

import iconGithub from '../Assets/iconGithub.svg';
import iconLinkedin from '../Assets/iconLinkedin.svg';
import iconGmail from '../Assets/iconGmail.svg';


function BodyComp(props){

    let iconStyle = {
        height: (window.innerWidth < 450 )? "50px" : "100px",
        width: (window.innerWidth < 450 )? "50px" : "100px"
    }
    
    return (
        <div className="bodyComp">
            
            <About/>

            <Experience/>
            
            <Projects/>

            <div id="contact" className="container container-sm p-4">
                <div className="grid">
                    <div className="row align-items-center text-center">
                            <a className="col" href="https://www.linkedin.com/in/pdinu/"><img src={iconLinkedin} alt="Linkedin" style={iconStyle}/></a>
                            <a className="col" href="https://github.com/medinu"><img src={iconGithub} alt="Github" style={iconStyle}/></a>
                            <a className="col" href="mailto:medinu95@gmail.com"><img src={iconGmail} alt="Email" style={iconStyle}/></a>
                    </div>
                </div>
            </div>

            <ScrollToTopBtn/>

        </div>
    )
}

export default BodyComp;