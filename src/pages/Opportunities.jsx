import React from 'react'
import './Opportunities.css'
import NavBar from '../components/NavBar'
import FreeImg from '../assets/free-img.jpg'
import JobOpening from '../components/JobOpening'
import {useState, useEffect} from 'react'
import Loading from '../components/Loading'


export default function Opportunities(){

    const [joinTeamData, setJoinTeamData] = useState(null);
    const [jobOpeningsData, setJobOpeningsData] = useState([]);
    const [contactUsData, setContactUsData] = useState(null);
    
    useEffect(() => {
        fetch("https://opensheet.elk.sh/1aRwz6tmV7sPX7QHvmPV2kjjQwb9CAbunItB_NJc_fQE/Join_Team")
            .then(res => res.json())
            .then(data => {
                setJoinTeamData(data[0]);
        });

        fetch("https://opensheet.elk.sh/1aRwz6tmV7sPX7QHvmPV2kjjQwb9CAbunItB_NJc_fQE/Job_Openings")
            .then(res => res.json())
            .then(data => {
                setJobOpeningsData(data);
            })

        fetch("https://opensheet.elk.sh/1aRwz6tmV7sPX7QHvmPV2kjjQwb9CAbunItB_NJc_fQE/Contact_Info")
            .then(res => res.json())
            .then(data => {
                setContactUsData(data[0]);
            })

    }, []);

    if (!joinTeamData || !jobOpeningsData || !contactUsData) return <Loading />



    return(
        <>
        <NavBar />
        <div className="contact-title-div">
            <h1 className="contact-title-text">
                Opportunities & Contact
            </h1>
        </div>

        <div className="join-team-div">
            <div className="join-team-text">
                <h1 className="join-team-title">
                Join Our Team!
                </h1>
                <p className="join-team-description" style={{ whiteSpace: "pre-line" }}>
                    {joinTeamData.description}
                </p>
            </div>

            <div className="join-team-img-div">
                <img className="join-team-image" src={joinTeamData.image} />
            </div>
            
        </div>

        <div className="job-opening-div">
            <h1 className="job-opening-title" style={{ whiteSpace: "pre-line" }}>Current Job Openings</h1>
            {jobOpeningsData.map((item, index) => (
                <JobOpening
                    key={index}
                    job_name={item.job_title}
                    job_description={item.job_description}
                    hours={item.hours}
                    work_study={item.work_study}
                    link={item.link}
                    style={{ whiteSpace: "pre-line" }}
                />
            ))}

        </div>

        <div className="contact-us-div">
            <h1 className="contact-us-title">Contact Us</h1>
            <h2 className="contact-us-info">Email: {contactUsData.contact_email}</h2>
        </div>
        
        </>
    )
}

