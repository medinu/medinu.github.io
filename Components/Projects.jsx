import React from 'react';
import currProjects from '../Assets/currProjects.json';
import PiHubPic from '../Assets/projectBanner/PIONEERHUB.PNG';
import dBallIo from '../Assets/projectBanner/DBALLIO.PNG';
import clonestagram from '../Assets/projectBanner/CLONESTAGRAM.PNG'

export default function Projects() {
    const projContainer = {
        backgroundColor: "rgb(165, 165, 165)",
        borderRadius: "5px"
    }

    const projectCardStyle = {
        backgroundColor: "ivory",
        borderRadius: "5px"
    }

    const imgStyle = {
        height: "200px", 
        width: "250px"
    }

    function projectPicture(title){
        switch (title) {
            case "PIONEERHUB":
                return PiHubPic;
                break;
            case "DBALL.IO":
                return dBallIo;
                break;
            case "CLONESTAGRAM":
                return clonestagram;
            default:
                break;
        }
    }

    let proj = currProjects.map((project, index)=>{
                    return (
                        <div key={project+index} id={project.title} className="col-md p-5 mb-3 text-center" style={projectCardStyle}>
                            <h3 >{project.title}</h3>
                            <img src={projectPicture(project.title)} alt={project.title} style={imgStyle} className="p-2"/>
                            <p className="text-left">{project.description}</p>
                            <a href={project.link} >Project Source</a>
                        </div>)
                })

    console.log(currProjects)
    console.log(proj)

    return (
        <div id="projects" className="projects p-3" >
            <div className="container-sm p-5" style={projContainer}>
                <h1 className="text-center border-bottom border-dark pb-2">Projects</h1>
                
                <div className="container overflow-hidden">
                    <div className="row">
                        {proj}
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
