import React from 'react'
import './YearsPublications.css'

export default function YearsPublication({year, publicationsList}){

    return (
        <div className="publications-list-div">

            <h1 className="publications-list-heading">
                {year} Publications
            </h1>

            <div className="list-div">

                {publicationsList.map((pub, index) => (
                    <>
                        <h4 key={index}>
                            {pub.title}
                        </h4>
                        <p key={index}>
                            {pub.citation}
                        </p>
                    </>
                ))}

            </div>

        </div>
    )
}
