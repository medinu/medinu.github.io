import React from 'react'
import currProjects from '../Assets/currProjects.json'

export default function Projects() {
    const projContainer = {
        backgroundColor: "rgb(165, 165, 165)",
        borderRadius: "5px"
    }

    let proj = currProjects.map((project, index)=>{
                    return (
                        <div key={project+index} className="project-card col-sm">
                            <h1 >{project.title}</h1>
                            <p>{project.description}</p>
                            <a href={project.link}>Project Source</a>
                        </div>)
                })

    console.log(currProjects)
    console.log(proj)

    return (
        <div id="projects" className="projects p-3 text-center" >
                <h2>Projects</h2>
            <div className="container container-sm p-5 text-center" style={projContainer}>
                <div className="row">
                    {proj}
                </div>

            </div>
        </div>
    )
}
