import React from "react";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import currProjects from '../Assets/currProjects.json';
const dpLogo = require('../Assets/dp.svg');

function Nav(props){
    const logoStyle = {
        height: "85px",
        margin: "-20px"
    }

    let projs = currProjects.map((project, idx)=>{
        return <a key={project+idx}href={"#"+project.title} className="dropdown-item">{project.title}</a>
    })


    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

            <span className="navbar-brand">
                <a href="#">
                    <img src={dpLogo} alt="Logo" style={logoStyle}/>
                </a>
            </span> 

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <a href="#about" className="nav-link">About Me</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown">Projects</a>
                        <div className="dropdown-menu display">
                            {projs}
                        </div>
                    </li>

                    <li className="nav-item">
                        <a href="#skillsAndExperience" className="nav-link">Skills &amp; Experience</a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Nav;