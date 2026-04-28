import { useState } from "react";
import { Link } from "react-router-dom";
import About from '../pages/About.jsx';
import React from 'react';
import './NewsStory.css';

function NewsStory({title, description, link}){
    return (
        <div className="news-story-container">
            <h2 className="news-story-title">{title}</h2>
            <p className="news-summary">
                {description}
            </p>
            <p className="news-link">{link}</p>
        </div>
    )
}
export default NewsStory;