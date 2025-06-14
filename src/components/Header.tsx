import "./Header.css";
import GithubIcon from "/Github.svg"; // Import the SVG file
import LinkedIn from "/LinkedIn.svg";
import Gmail from "/Gmail.svg";

export const Header = () => {
  return (
    <header>
      <h1 className="logo-title">Tapiwa</h1>
      <nav>
        <ul className="header-ul nav-links-ul">
          <li className="header-li">
            <a className="nav-link" href="#about">About Me</a>
          </li>
          <li className="header-li">
            <a className="nav-link">Projects</a>
          </li>
          <li className="header-li">
            <a className="nav-link">Contact Me</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="header-ul">
          <li className="header-li">
            <a className="social-link" href="https://linkedin.com/in/tapiwamazarura">
              <img src={LinkedIn} alt="LinkedIn" className="social-icon" />
            </a>
          </li>
          <li className="header-li">
            <a className="social-link" href="https://github.com/Tapiwamaz">
              <img src={GithubIcon} alt="Github" className="social-icon" />
            </a>
          </li>
          <li className="header-li">
            <a className="social-link" href="mailto:mazaruratapiwa03@gmail.com">
              <img src={Gmail} alt="Gmail" className="social-icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
