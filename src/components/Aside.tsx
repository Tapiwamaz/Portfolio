import { useAppContext } from "../AppContext/AppContext";
import "./Aside.css";
// icons
import { GitHubDarkIcon, LinkedDark, CV } from "./Icons";
// svgs
import GithubIcon from "/Github.svg"; // Import the SVG file;
import Gmail from "/Gmail.svg";
import LinkedIn from "/LinkedIn.svg";

const Aside = () => {
  const { isDarkMode, asideOn, toggleTheme, setAsideOn } = useAppContext();

  const handleOutSideClick = () => {
    setAsideOn(false);
  };
  const handleInsideClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <section
      className={`aside-section ${asideOn ? "aside-section-visible" : ""}`}
      onClick={handleOutSideClick}
    >
      <aside
        className={`aside ${asideOn ? "aside-visible" : "aside-hidden"}`}
        onClick={handleInsideClick}
      >
        <nav className="aside-on-page-nav">
          <h3>Nav</h3>
          <ul className="aside-ul">
            <li className="aside-header-li">
              <a className="aside-nav-link" href="#about">
                About Me
              </a>
            </li>
            <li className="aside-header-li">
              <a className="aside-nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="aside-header-li">
              <a className="aside-nav-link" href="#carousel">
                Timeline
              </a>
            </li>

            <li className="aside-header-li">
              <a className="aside-nav-link" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>

        <nav className="aside-socials-nav">
          <h3>Socials</h3>
          <ul className="aside-ul-social">
            <li className="aside-header-li">
              <a
                className="aside-social-link"
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
                <label>LinkedIn</label>
              </a>
            </li>
            <li className="aside-header-li">
              <a
                className="aside-social-link"
                href="https://github.com/Tapiwamaz"
              >
                {!isDarkMode && (
                  <img src={GithubIcon} alt="Github" className="social-icon" />
                )}
                {isDarkMode && (
                  <div className="social-icon">
                    <GitHubDarkIcon />
                  </div>
                )}
                <label>GitHub</label>
              </a>
            </li>

            <li className="aside-header-li">
              <a
                className="aside-social-link"
                href="mailto:mazaruratapiwa03@gmail.com"
              >
                <img src={Gmail} alt="Gmail" className="social-icon" />
                <label>Gmail</label>
              </a>
            </li>
            <li className="aside-aside-header-li">
              <a
                className="aside-social-link"
                href="/Resume.pdf"
                target="_blank"
              >
                <div className="social-icon">
                  <CV />
                </div>
                <label>Resume</label>
              </a>
            </li>

            {/* <li className="aside-header-li">
              <a className="aside-social-link light-mode-btn">
               
              </a>
            </li> */}
          </ul>
        </nav>

        <div className="dark-mode-slider">
          {" "}
          <div className="checkbox-wrapper-3">
            <input
              type="checkbox"
              id="cbx-3"
              checked={isDarkMode}
              onClick={() => {
                toggleTheme();
              }}
            />
            <label htmlFor="cbx-3" className="toggle">
              <span></span>
            </label>
          </div>
          <p>Dark Mode</p>
        </div>
      </aside>
    </section>
  );
};

export default Aside;
