import './header.css';
import logo from '../heart-graphic.png'; 
import resume from '../resume.pdf';

const Header = () => {
  return (
    <header className="header-style">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="heart logo" />
        </a>
      </div>
      <nav className="menu">
        <ul>
          <li><a href="/" class="circle-word">home</a></li>
          <li><a href="/about-me" class="circle-word">about me</a></li>
          <li><a href="/experiences" class="circle-word">experiences</a></li>
          <li>
            <a href={resume}
               target="_blank" 
               rel="noopener noreferrer" 
               className="circle-word">
               resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;