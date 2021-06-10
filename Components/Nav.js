import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Nav(props){
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

            <a href="#" className="navbar-brand">LOGO</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <a href="#about" className="nav-link">About Me</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a href="#projects" className="nav-link dropdown-toggle" data-toggle="dropdown">Projects</a>
                        <div className="dropdown-menu">
                            <a href="#project1" className="dropdown-item">Project1</a>
                            <a href="#project2" className="dropdown-item">Project2</a>
                            <a href="#project3" className="dropdown-item">Project3</a>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a href="#Education" className="nav-link">Education</a>
                    </li>

                    <li className="nav-item">
                        <a href="#skillsAndExperience" className="nav-link">Skills &amp; Experience</a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="#Contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Nav;