import React, { useEffect, useState } from 'react';
import './footer.css';

const phrases = [
  'made with <3 by ashlyn',
  'built using react',
  '© ashlyn wu, 2024'
];

const Footer = () => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < phrases[phraseIndex].length) {
        setDisplayText(prev => prev + phrases[phraseIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCharIndex(0);
          setDisplayText('');
          setPhraseIndex(prev => (prev + 1) % phrases.length);
        }, 1500);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [charIndex, phraseIndex]);

  return (
    <footer className="footer-style">
      <p>
        {displayText}
        <span className="cursor">|</span>
      </p>
    </footer>
  );
};

export default Footer;
