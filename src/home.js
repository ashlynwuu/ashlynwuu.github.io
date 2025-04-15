import bow from './assets/bow-graphic.png';
import heart from './assets/heart-graphic.png'
import './App.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const bowRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const handleExperiencesClick = () => {
    navigate('/experiences');
  };

  const handleAboutMeClick = () => {
    navigate('/about-me');
  };

  return (
    <div className="App">
      <header className={`App-header ${isVisible ? "fade-in" : "hidden"}`}>
        <div className="bow-container">
          <img
            src={bow}
            alt="doodle of a hair ribbon"
            className="bow-graphic"
            ref={bowRef}
          />
        </div>
        <div>
          <h1 className="font-regular" style={{ fontSize: '48px', paddingTop: '32px' }}>
            hi, i’m <span style={{ color: '#D85384' }}>ashlyn</span>!
          </h1>
          <div style={{ paddingTop: '12px' }}>
            <p className="font-regular" style={{ fontSize: '24px', paddingTop: '24px' }}>
              i <img src={heart} alt="heart" style={{ width: '20px', verticalAlign: 'middle', marginLeft: '4px', marginRight: '4px', marginBottom: '2px' }} /> doodling, traveling, & building cool things
            </p>
            <p className="font-regular" style={{ fontSize: '24px', paddingTop: '16px' }}>
              learn more <span className="circle-word pink" onClick={handleAboutMeClick}>about me</span> & <span className="underline-word pink" onClick={handleExperiencesClick}> my experiences </span> :-)
            </p>
            <p className="font-regular" style={{ color: '#D85384', fontSize: '18px', paddingTop: '16px' }}>
              ps. hover over the bow for a surprise!
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
