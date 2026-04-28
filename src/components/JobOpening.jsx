import React from 'react'
import './JobOpening.css'

export default function JobOpening({job_name, job_description, hours, work_study, link}) {


    return(

        <a href={link} className="job-opening-info-div glow">
            <div className="job-info-div">
                <h1 className="job-title">
                    {job_name}
                </h1>

                <p className="job-description">
                    {job_description}
                </p>
            </div>

            <div className="hours-info-div">
                <h2 className="hours-title">
                    Hours: {hours}
                </h2>

                <h2 className="work-study-info">
                    Work-Study: {work_study}
                </h2>
            </div>
        </a>
    )
}
