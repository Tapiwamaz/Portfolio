import "./Header.css";
import GithubIcon from "/Github.svg"; // Import the SVG file;
import Gmail from "/Gmail.svg";
import Sun from "/Sun1.svg";
import LinkedIn from "/LinkedIn.svg";

import { Moon, GitHubDarkIcon, LinkedDark, CV } from "./Icons";
import { useAppContext } from "../AppContext/AppContext";

export const Header = () => {
  const { isDarkMode, setIsDarkMode } = useAppContext();

  const toggleTheme = () => {
    const root = document.documentElement;

    if (isDarkMode) {
      // light mode
      root.style.setProperty("--background", "#fbfbfb");
      root.style.setProperty("--text-main", "#010101");
      root.style.setProperty("--card-background", "#f9f9f9");
      root.style.setProperty("--white-highlight", "#efefef");
    } else {
      //  dark mode
      root.style.setProperty("--background", "#010101");
      root.style.setProperty("--text-main", "#fbfbfb");
      root.style.setProperty("--white-highlight", "#141414");
      root.style.setProperty("--card-background", "#010000");
    }

    setIsDarkMode(!isDarkMode);
  };
  return (
    <header>
      <h1 className="logo-title">Tapiwa</h1>
      <nav>
        <ul className="header-ul nav-links-ul">
          <li className="header-li">
            <a className="nav-link" href="#about">
              About Me
            </a>
          </li>
          <li className="header-li">
            <a className="nav-link" href="#timeline">
              Timeline
            </a>
          </li>
          <li className="header-li">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="header-li">
            <a className="nav-link" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
      <nav className="social-links-nav">
        <ul className="header-ul">
          <li className="header-li">
            <a
              className="social-link"
              href="https://linkedin.com/in/tapiwamazarura"
            >
              {" "}
              {isDarkMode && (
                <div className="social-icon">
                  <LinkedDark />
                </div>
              )}
              {!isDarkMode && (
                <img src={LinkedIn} alt="Github" className="social-icon" />
              )}
            </a>
          </li>
          <li className="header-li">
            <a className="social-link" href="https://github.com/Tapiwamaz">
              {!isDarkMode && (
                <img src={GithubIcon} alt="Github" className="social-icon" />
              )}
              {isDarkMode && (
                <div className="social-icon">
                  <GitHubDarkIcon />
                </div>
              )}
            </a>
          </li>

          <li className="header-li">
            <a className="social-link" href="mailto:mazaruratapiwa03@gmail.com">
              <img src={Gmail} alt="Gmail" className="social-icon" />
            </a>
          </li>
          <li className="header-li">
            <a className="social-link" href="/Resume.pdf"  target="_blank">
              <div className="social-icon">
                <CV />
              </div>
            </a>
          </li>

          <li className="header-li">
            <a className="social-link light-mode-btn">
              {isDarkMode ? (
                <div className="social-icon moon" onClick={toggleTheme}>
                  <p className="dark-mode-label">Dark Mode</p>
                  <Moon />
                </div>
              ) : (
                <img
                  src={Sun}
                  alt="Sun"
                  className="social-icon"
                  onClick={toggleTheme}
                />
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
