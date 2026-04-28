import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';
import NavBar from '../components/NavBar';
import CircleImg from '../assets/CircleImg.png';
import NewsStory from '../components/NewsStory.jsx';
import Loading from '../components/Loading'


function Home(){

    const [homeData, setHomeData] = useState(null);
    const [featured, setFeatured] = useState(null);
    const [news, setNews] = useState([]);


    useEffect(() => {
        fetch("https://opensheet.elk.sh/1aRwz6tmV7sPX7QHvmPV2kjjQwb9CAbunItB_NJc_fQE/Home_Main")
            .then(res => res.json())
            .then(data => setHomeData(data[0]));

        fetch("https://opensheet.elk.sh/1aRwz6tmV7sPX7QHvmPV2kjjQwb9CAbunItB_NJc_fQE/Featured_Research")
            .then(res => res.json())
            .then(data => {
                console.log(data[0]); 
                setFeatured(data[0]);
            });

        fetch("https://opensheet.elk.sh/1aRwz6tmV7sPX7QHvmPV2kjjQwb9CAbunItB_NJc_fQE/News")
            .then(res => res.json())
            .then(data => setNews(data));
    }, []);

    if(!homeData || !featured) return <Loading />;

    return (
        <>
            <NavBar />
            <div className="home-heading-div">
                <h1 className="home-title home-glow">Welcome to the Spatial Thinking and Embodied Technologies Lab!</h1>
            </div>

            <div className="home-description-div">
                <p className="description-paragraph" style={{ whiteSpace: "pre-line" }}>{homeData.description}</p>
            </div>

            <div className="home-picture-div">
                <img className="home-img" src={homeData.img1} alt="Lab photo 1" />
                <img className="home-img" src={homeData.img2} alt="Lab photo 2" />
                <img className="home-img" src={homeData.img3} alt="Lab photo 3" />
                <img className="home-img" src={homeData.img4} alt="Lab photo 4" />
            </div>

            <div className="featured-research-div">
                <div className="feature-text">
                    <h1 className="featured-research-title">
                        {featured.title}
                    </h1>
                    <div className="feature-description">
                        <p className="feature-paragraph" style={{ whiteSpace: "pre-line" }}>
                            {featured.description}
                        </p>
                    </div>
                </div>

                <div className="feature-img-div">
                   <img 
                        className="feature-img" 
                        src={featured.image} 
                        alt="Featured research"
                        crossOrigin="anonymous"
                    />
                </div>
            </div>

            <div className="current-news-div">
                <h1 className="current-news-title">Current News & Highlights</h1>
                <div className="news-item-div" >
                    {news.map((item, index) => (
                        <NewsStory 
                            key={index}  
                            title={item.title}
                            description={item.description}
                            link={item.link}
                            style={{ whiteSpace: "pre-line" }}
                        />
                    ))}
                </div>
            </div>
        
        </>
    )
}

export default Home;