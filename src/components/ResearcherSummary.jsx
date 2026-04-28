import React from 'react';
import './ResearcherSummary.css';
import CircleImg from '../assets/CircleImg.png';


export default function ResearcherSummary({
  name = "Name1",
  image = "",
  summary = ""
}) {
  return (
    <div className="researcher-card">
      
      {image && (
        <img className="researcher-img" src={image} alt={name} />
      )}

      <h1 className="researcher-title">{name}</h1>

      <p className="researcher-summary">{summary}</p>
    </div>
  );
}