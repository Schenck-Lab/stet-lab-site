import React from 'react'
import './Years.css'

export default function Years({year, setYear, selectedYear}){

    const isSelected = year === selectedYear

    return(
        <div 
            className={`year-div ${isSelected ? "year-active" : ""}`}
            onClick={() => setYear(year)}
        >
            <h1 className="year-heading">
                {year}
            </h1>
        </div>
    )
}
