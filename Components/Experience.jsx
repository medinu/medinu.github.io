import React from 'react'
import currExperience from '../Assets/currExperience.json';

export default function Experience() {
    function getJobDesc(descList){
        return descList.map();
    }


    let exp = currExperience.map((job, idx)=>{
        return (
            <div className={(idx%2==0)? "col-sm animate__animated animate__fadeInLeft animate__faster" : "col-sm  animate__animated animate__fadeInRight animate__faster"} key={job.title + idx}>
                <h3>{job.company} - {job.title}</h3>
                <ul>
                    {job.tasks.map((task, idx)=>{
                        return <li key={task+idx} >{task}</li>
                    })}
                </ul>
            </div>
        )
    })


    const expContainer = {
        backgroundColor: "rgb(165, 165, 165)",
        borderRadius: "5px"
    }


    return (
        <div id="skillsAndExperience" className="skillsAndExperience p-3">
            <div className="container container-sm p-5 bg-light" style={expContainer}>
                <h1 className="text-center border-bottom border-dark pb-2 animate__animated animate__bounce">Relevant Experience</h1>
                <div className="row">
                    {exp}
                </div>
            </div>
        </div>
    )
}
