import React from 'react';
const gradPic = require('../Assets/gradPic.jpg');
const gradCap = require('../Assets/iconGradCap.svg');

import Particles from 'react-particles-js';

export default function About() {
    const imgStyle = {
        borderRadius:"50%",
        boxShadow: "0px 0px 3px",
        height: (window.innerWidth < 450)? window.innerWidth/2 : "250px",
        width: (window.innerWidth < 450)? window.innerWidth/2 : "250px",
    }

    const abtContainer = {
        borderRadius: "5px",
    }

    return (
        <div id="about" className="about p-3 " style={{"position": "relative"}}>
            <Particles style={{"position": "fixed", "z-index": "0"}} 
                    params={{
                        "particles": {
                            "number": {
                                "value": 200,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 1,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }}
                />

                <div className="abtCont container-sm p-5 bg-light text-center" style={abtContainer}>
                    <img className="container p-0 mb-3" style={imgStyle} src={gradPic} alt="My face"/>
                
                    <h1 className="border-bottom border-top border-dark p-2 animate__animated animate__bounce">Hello, My name is Dinesh Pandey</h1><br/>
                    
                    <img src={gradCap} alt="Alma matter"/>
                    <h5>CALIFORNIA STATE UNIVERSITY EAST BAY<span className="h6"><br/>Hayward, CA</span></h5>
                    <p className="pb-3">BS COMPUTER SCIENCE <br/><span>Aug 2019 – May 2021</span></p>
                    
                    <p>Aspiring Web/Mobile/Software Developer with foundational knowledge pertaining to Software Engineering. Experienced in C++, Java, JavaScript, Python. </p>
                    <p>
                        <q>The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.</q>
                        – Steve Jobs
                    </p>
                </div>
        </div>
            
    )
}
