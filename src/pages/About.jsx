import './About.css'
import NavBar from '../components/NavBar'
import CircleImg from '../assets/CircleImg.png'
import Img from '../assets/free-img.jpg'
import React from 'react';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading'

function About(){

    const [aboutUsData, setAboutUsData] = useState(null);
    const [missionData, setMissionData] = useState(null);

    useEffect(() => {
        fetch("https://opensheet.elk.sh/1aRwz6tmV7sPX7QHvmPV2kjjQwb9CAbunItB_NJc_fQE/About_Us")
            .then(res => res.json())
            .then(data => {
                setAboutUsData(data[0]);
            });

        fetch("https://opensheet.elk.sh/1aRwz6tmV7sPX7QHvmPV2kjjQwb9CAbunItB_NJc_fQE/Mission_About_Us")
            .then(res => res.json())
            .then(data => {
                setMissionData(data[0]);
            })
    }, []);


    if(!aboutUsData || !missionData) return <Loading />;

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        
            <NavBar />
            <div className="about-heading-div">
                <h1 className="about-title">About Us</h1>
            </div>

            <div className="about-description-div">
                <p className="about-paragraph" style={{ whiteSpace: "pre-line" }}>{aboutUsData.description}</p>
            </div>

            <div className="about-picture-div">
                <img className="about-picture" src={aboutUsData.img1}/>
                <img className="about-picture" src={aboutUsData.img2}/>
                <img className="about-picture" src={aboutUsData.img3}/>
            </div>

            <div className="mission-research-div">
                <div className="mission-text">
                    <h1 className="mission-research-title">Our Mission</h1>
                    <div className="mission-description">
                    <p className="mission-paragraph" style={{ whiteSpace: "pre-line" }}>
                        {missionData.description}
                    </p>
                    </div>
                </div>

                <div className="mission-img-div">
                    <img className="mission-img" src={missionData.img}/>
                </div>
            </div>

        
        </>
    )
}

export default About;