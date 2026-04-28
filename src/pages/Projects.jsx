import './Projects.css'
import NavBar from '../components/NavBar'
import CircleImg from '../assets/CircleImg.png'
import {useState, useEffect} from 'react'
import NewsStory from '../components/NewsStory.jsx'
import React from 'react';
import Loading from '../components/Loading'

export default function Projects(){

    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        fetch("https://opensheet.elk.sh/1aRwz6tmV7sPX7QHvmPV2kjjQwb9CAbunItB_NJc_fQE/Projects")
            .then(res => res.json())
            .then(data => {
                setProjectData(data);
        });
    }, []);

    if (!projectData) return <Loading />

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        
            <NavBar />
            <div className="projects-heading-div">
                <h1 className="projects-title">Research & Projects</h1>
            </div>

            {projectData.map((project, index) => {

                const imageSection = (
                    <div className="project-img-div">
                        <img 
                            className="project-img"
                            src={project.project_image}
                            alt={project.project_name}
                        
                        />
                    </div>

                );

                const textSection = (
                    <div className="project-text">
                        <h1 className="project-research-title" style={{ whiteSpace: "pre-line" }}>
                            {project.project_name}
                        </h1>
                        <div className="project-description">
                            <p className="project-paragraph" style={{ whiteSpace: "pre-line" }}>
                                {project.project_description}
                            </p>
                        </div>
                    </div>
                );

                return (
                    <div className="featured-project-div" key={index} style={{ whiteSpace: "pre-line" }}>
                        {index % 2 === 0 ? (
                            <>
                                {imageSection}
                                {textSection}
                            </>
                        ) : (
                            <>
                                {textSection}
                                {imageSection}
                            </>
                        )}
                    </div>
                )
            })}

        </>
    )
}
