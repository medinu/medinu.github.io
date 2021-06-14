import React from 'react'
const gradPic = require('../Assets/gradPic.jpg');

export default function About() {
    const imgStyle = {
        borderRadius:"50%",
        boxShadow: "0px 0px 3px",
        height: "300px",
        width: "300px"
    }

    const abtContainer = {
        borderRadius: "5px"
    }

    return (
        <div id="about" className="about d-flex p-3">
            <div className="abtCont container-sm p-5 bg-light text-center " style={abtContainer} >
                <img className="container p-2 m-2" style={imgStyle} src={gradPic} alt="My face"/>
                <h1 className="border-bottom border-top border-dark p-2">Hello, My name is Dinesh Pandey</h1><br/>
                <p>Aspiring Web/Mobile/Software Developer with foundational knowledge pertaining to Software Engineering. Experienced in C++, Java, JavaScript, Python. </p>
                <p>
                    <q>The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.</q>
                    – Steve Jobs
                </p>
            </div>
        </div>
    )
}
