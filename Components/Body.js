import React from 'react';
const UpArrow = require('../Assets/arrow-up.svg');
const gradPic = require('../Assets/gradPic.jpg');

function BodyComp(props){
    const UpArrowStyle = {
        backgroundColor: "rgba(122, 122, 122, 0.25)",
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "inline-block",
        alignItems: "center",
        opacity: "0"
    }

    const ArrowImgStyle = {
        height: "50px",
        width: "50px",
        position: "relative",
        margin: "auto",
        right: "1px"
    }

    const imgStyle = {
        borderRadius:"50%",
        boxShadow: "0px 0px 3px"
    }
    
    const showBtn  = {
        opacity: "1",
        transform: "translateY(0)"
    }
    
    const scrollToTopLogic = ()=>{
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    function handleScroll() {
        let rootElement = document.documentElement;
        let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if ((rootElement.scrollTop / scrollTotal ) > 0.2 ) {
            // Show button
            document.getElementById("scrollToTop").style.opacity = 1;
            document.getElementById("scrollToTop").style.transform = "translateY(0)";
        } else {
            // Hide button
            document.getElementById("scrollToTop").style.opacity = 0;
            document.getElementById("scrollToTop").style.transform = "translateY(0)";

        }
    }
    
    document.addEventListener("scroll", handleScroll)

    return (
        <div className="bodyComp">
            <div id="about" className="about d-flex p-3">
                <div className="abtCont container-sm p-5 bg-light text-center ">
                    <img className="container p-2 m-2" style={imgStyle} src={gradPic} alt="My face"/>
                    <h1 className="border-bottom border-top border-dark p-2">Hello, My name is Dinesh Pandey</h1><br/>
                    <p>Aspiring Web/Mobile/Software Developer with foundational knowledge pertaining to Software Engineering. Experienced in C++, Java, JavaScript, Python. </p>
                    <p>
                        <q>The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.</q>
                        – Steve Jobs
                    </p>
                </div>
            </div>

            <div id="projects" className="projects">
                <h1>Projects</h1>
            </div>

            <div id="skillsAndExperience" className="skillsAndExperience">
                <h1>Skills &amp; Experience</h1>
            </div>

            <div id="education" className="education">
                <h1>Education</h1>
            </div>

            <div id="contact" className="contact">
                <h1>Say hello!</h1>
            </div>

            <a id="scrollToTop" style={UpArrowStyle} onClick={scrollToTopLogic}>
                    <img style={ArrowImgStyle} src={UpArrow}/>
            </a>

        </div>
    )
}

export default BodyComp;