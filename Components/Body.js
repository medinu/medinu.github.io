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
        height: "50px",
        width: "50px"
    }
    
    return (
        <div className="bodyComp">
            
            <About/>

            <Experience/>
            
            <Projects/>

            <ScrollToTopBtn/>

            <footer>
                <a>© 2021 Dinesh Pandey</a> 
                <div id="contact" className="container-fluid p-4">
                    <div className="grid">
                        <div className="row justify-content-around text-center">
                                <a className="col-1" href="https://www.linkedin.com/in/pdinu/"><img className="contactBtn" src={iconLinkedin} alt="Linkedin" style={iconStyle}/></a>
                                <a className="col-1" href="https://github.com/medinu"><img className="contactBtn" src={iconGithub} alt="Github" style={iconStyle}/></a>
                                <a className="col-1" href="mailto:medinu95@gmail.com"><img className="contactBtn" src={iconGmail} alt="Email" style={iconStyle}/></a>
                        </div>
                    </div>
                </div>

            </footer>

        </div>
    )
}

export default BodyComp;