import './App.css';
import Header from './header/header.js';
import React, { useState, useEffect, useRef } from 'react';
import Footer from './footer/footer.js';

function Experiences() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleExperiences, setVisibleExperiences] = useState([]);
  const experienceRefs = useRef([]);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index'), 10);
          if (entry.isIntersecting) {
            setVisibleExperiences((prev) => [...new Set([...prev, index])]);
          } else {
            setVisibleExperiences((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.4 }
    );

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      experienceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const experiencesData = [
    {
      title: "Frontend Software Developer @ Scrawlr",
      date: "09/24 - 12/24 | Vancouver, BC",
      skills: "✧˖°. Vue.js • Solid.js • Tailwind CSS • Sass • Playwright",
      tasks: [
        "Built web pages for Jauntr Web, an e-commerce flight booking website, using Vue.js, Tailwind CSS, and Sass",
        "Launched investigation into Playwright for Jauntr Web integration testing",
      ],
    },
    {
      title: "Frontend Developer @ Squaredance",
      date: "09/23 - 12/23 | Toronto, ON",
      skills: "✧˖°. Vue.js • Tailwind CSS • Typescript • Storybook",
      tasks: [
        "Designed and developed UI elements on Squaredance platform, a partner marketing platform for DTC brands, integrating them with API services using Vue.js and Tailwind CSS",
        "Lead frontend initiative in highly requested coupon codes project on Squaredance platform",
        "Conducted evaluations of UI designs using Figma, participating in design iterations to refine and optimize the platform’s user interface",
        "Managed task allocation and supervised frontend team members to ensure project milestones were met",
        "Leveraged Lottie to create front end animations for the platform’s loading states",
      ],
    },
    {
      title: "Software Engineer (Google Cloud Platform) @ Titanium Agency",
      date: "01/23 - 04/23 | Waterloo, ON",
      skills: "✧˖°. JavaScript • Python • C# • CSHTML • PHP",
      tasks: [
        "Implemented 8+ highly requested features for the company's ad management software using C#, JavaScript, Python, and CSHTML, including error prevention for ad uploads, security features, and user settings",
        "Streamlined the process of uploading Facebook ads by integrating Google upload queue functionality into the company's software, resulting in a 60% increase in successful ad uploads",
        "Created a customizable WordPress plugin using PHP, JavaScript, HTML, and CSS, which allows for the insertion of keyword templates into articles",
        "Successfully maintained and upgraded 5+ WordPress sites, ensuring that each site is up-to-date and fully functional",
      ],
    },
    {
      title: "Fullstack Developer @ CI Technologies",
      date: "05/22 - 08/22 | Vancouver, BC",
      skills: "✧˖°. Vue.js • Java • Figma • TestNG",
      tasks: [
        "Architected and developed fullstack solution for highly requested customer feedback portal using Java, Vue.js and SQL used by 50+ police agencies to increase safety and consumer satisfaction",
        "Developed 200+ automated testing scripts using TestNG and Java, covering 10+ features",
        "Created a customizable WordPress plugin using PHP, JavaScript, HTML, and CSS, which allows for the insertion of keyword templates into articles",
        "Created wireframes, storyboards and mockups for corresponding account pages using Figma",
      ],
    },
  ];

  return (
    <div className="App">
      <Header />
      <header className={`App-header ${isVisible ? "fade-in" : "hidden"}`}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="text-container">
          <p className="header" style={{ paddingTop: '140px' }}>
            my <span style={{ color: '#D85384' }}>experiences</span>
          </p>
          <div style={{ paddingBottom: '100px' }}>
            {experiencesData.map((experience, index) => (
              <div
                key={index}
                ref={(el) => (experienceRefs.current[index] = el)} // Attach each container to a ref
                data-index={index} // Attach index for reference
                className={`experience-container ${visibleExperiences.includes(index) ? "fade-in" : "hidden"}`}
                style={{ transition: 'opacity 0.5s', opacity: visibleExperiences.includes(index) ? 1 : 0 }}
              >
                <p className="font-bold" style={{ fontSize: '20px' }}>{experience.title}</p>
                <p className="font-regular" style={{ color: '#DD7EA1', fontSize: '16px' }}>{experience.date}</p>
                <p className="font-regular" style={{ color: '#D85384', fontSize: '16px', paddingTop: '16px' }}>{experience.skills}</p>
                <ul className="font-regular" style={{ fontSize: '16px', paddingTop: '16px', paddingLeft: '20px', marginLeft: '0' }}>
                  {experience.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default Experiences;
