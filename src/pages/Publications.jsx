import React from 'react'
import './Publications.css'
import NavBar from '../components/NavBar'
import Year from '../components/Years'
import YearsPublication from '../components/YearsPublications'
import { useState, useEffect } from 'react'

export default function Publications(){

    const [selectedYear, setSelectedYear] = useState(null)
    const [publications, setPublications] = useState([])
    const [publicationDescription, setPublicationDescription] = useState(null)

    useEffect(() => {
        fetch("https://opensheet.elk.sh/1aRwz6tmV7sPX7QHvmPV2kjjQwb9CAbunItB_NJc_fQE/Publications")
            .then(res => res.json())
            .then(data => setPublications(data));
    }, []);

    useEffect(() => {
        fetch("https://opensheet.elk.sh/1aRwz6tmV7sPX7QHvmPV2kjjQwb9CAbunItB_NJc_fQE/Publications_Page")
            .then(res => res.json())
            .then(data => setPublicationDescription(data));
    }, []);

    const years = [...new Set(publications.map(pub => pub.year))]
        .sort((a,b) => b - a)  

    const filteredPublications = publications.filter(
        pub => pub.year === String(selectedYear)
    )


    return (
        <>
        <NavBar />
        <div className="publications-title-div">
            <h1 className="publications-title">
                Our Publications
            </h1>
            <p className="publications-description" style={{ whiteSpace: "pre-line" }}>
                {publicationDescription.description}
            </p>
        </div>

        <div className="year-publications-div">
            {years.map((y) => (
                <Year
                    key={y}
                    year={y}
                    setYear={setSelectedYear}
                    selectedYear={selectedYear}
                />
            ))}
        </div>

        {selectedYear && (
            <YearsPublication
                year={selectedYear}
                publicationsList={filteredPublications}
            />
        )}
        
        </>
    )
}