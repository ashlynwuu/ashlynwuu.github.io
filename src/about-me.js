import './App.css';
import Header from './header/header.js'
import Footer from './footer/footer.js';
import me from './assets/me.png'; 
import React, { useState, useEffect } from 'react';

function AboutMe() {

  const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }, []);

  return (
    <div className="App">
      <Header></Header>
      <header className={`App-header ${isVisible ? "fade-in" : "hidden"}`} 
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div class="outer-container" style={{ paddingBottom: '112px' }}>
          <div class="text-container">
            <p class="header"> about <span style={{ color: '#D85384' }}>me</span> </p>
            <p class="body" style={{ fontSize: '16px' }}> hi again! i’m so happy you wanted to learn more about me :-)
              <br></br>
              <br></br>
              i’m a <span style={{ color: '#D85384' }}>frontend developer</span> currently studying at <span style={{ color: '#D85384' }}>University of Waterloo</span> (on track to graduate in spring 2025!),
              who's passionate about the intersection between innovation and accessibility!
              <br></br>
              <br></br>
              besides coding, i love <span style={{ color: '#D85384' }}>exploring the world</span>! i recently did a semester abroad in Sweden 🇸🇪
              and was lucky enough to be able to travel across Europe + Morocco.
              while traveling, i am often fascinated by the country’s architecture, nature, and of course their food ;)
              <br></br>
              <br></br>
              i also love <span style={{ color: '#D85384' }}>drawing</span> (all the graphics on this site are hand drawn using Procreate!)
              and <span style={{ color: '#D85384' }}>collecting trinkets</span> from my experiences (i keep every receipt and ticket - just ask my friends)
              <br></br>
              <br></br>
              please come say hi through my <span style={{ color: '#D85384' }}>email</span> or <span style={{ color: '#D85384' }}>linkedin</span>! meeting new people is one of my favorite things :D </p>
          </div>
          <div class="image-container">
            <img src={me} alt="photograph of myself" style={{ width: '500px', height: 'auto' }}></img>
          </div>
        </div>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default AboutMe;