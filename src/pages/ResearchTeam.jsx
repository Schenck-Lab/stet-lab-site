import React from 'react';
import NavBar from '../components/NavBar';
import { useState, useEffect } from 'react';
import './ResearchTeam.css';
import CircleImg from '../assets/CircleImg.png';
import Researcher from '../components/ResearcherSummary.jsx';
import RuthPicture from '../assets/Ruth_STET_Picture.png'
import Loading from '../components/Loading'



export default function ResearchTeam(){

    const [mainResearcherData, setMainResearcherData] = useState(null);
    const [researchersData, setResearchersData] = useState([]);
    const [alumniResearchersData, setAlumniResearchersData] = useState([]);
    const sortedResearchers = [...researchersData].sort((a, b) => {
    const score = (item) => {
        let s = 0;
        if (item.picture) s += 2;   
        if (item.summary) s += 1;
        return s;
    };

    return score(b) - score(a); 
    });
    
    
    useEffect(() => {
        fetch("https://opensheet.elk.sh/1aRwz6tmV7sPX7QHvmPV2kjjQwb9CAbunItB_NJc_fQE/Main_Researcher")
            .then(res => res.json())
            .then(data => setMainResearcherData(data[0]));

        fetch("https://opensheet.elk.sh/1aRwz6tmV7sPX7QHvmPV2kjjQwb9CAbunItB_NJc_fQE/Researchers")
            .then(res => res.json())
            .then(data => setResearchersData(data));

        fetch("https://opensheet.elk.sh/1aRwz6tmV7sPX7QHvmPV2kjjQwb9CAbunItB_NJc_fQE/Alumni_Researchers")
            .then(res => res.json())
            .then(data => setAlumniResearchersData(data));
        }, []);

    if (!mainResearcherData || !researchersData) return <Loading />;


    return (
        <>
            <NavBar />
            <div className="research-team-heading-div">
                <h1 className="research-team-title">Our Research Team</h1>
            </div>

            <div className="lead-researcher-div">
                <img className="lead-img" src={mainResearcherData.picture}/>
                <div className="lead-researcher-text">
                    <h1 className="lead-researcher-name">{mainResearcherData.name}</h1>
                    <div className="lead-summary">
                        <p className="lead-researcher-paragraph">
                            {mainResearcherData.summary}
                        </p>
                    </div>
                </div>
            </div>

            <div className="all-researcher-div">
                {sortedResearchers.map((item, index) => (
                    <Researcher 
                        key={index}
                        name={item.name}
                        image={item.picture}
                        summary={item.summary}
                    />
                ))}
            </div>
            
            {alumniResearchersData.length > 0 &&
                <div className="alumni-researcher-div">
                    <div className="alumni-heading-div">
                        <h1 className="alumni-researcher-heading">
                            Alumni Researchers
                        </h1>
                    </div>

                    <div className="all-alumni-researcher-div">
                        {alumniResearchersData.map((item, index) => (
                            <Researcher 
                                key={index}
                                name={item.name}
                                image={item.picture}
                                summary={item.summary}
                            />
                        ))}
                    </div>
                </div>
            }


            

        </>
    )
}