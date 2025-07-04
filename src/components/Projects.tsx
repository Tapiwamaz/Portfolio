import "./Projects.css";
import GithubIcon from "/Github.svg";
import { Arrow, GitHubDarkIcon } from "./Icons";
import { useAppContext } from "../AppContext/AppContext";
import LiveApp from "./LiveApp";

const Projects = () => {
  const { isDarkMode } = useAppContext();
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-container">
        <div className="project-desc">
          <span>2024</span>
          <h3>Univents</h3>
          <h4>Campus Event Mangement Platform</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            blanditiis possimus, beatae perferendis iste repellendus ea aperiam
            tenetur animi rem! Sequi veniam, voluptas sit iste ea autem iusto
            fugiat. Fugiat!
          </p>
          <div className="project-links">
            <a
              href="https://delightful-forest-0475dad03.5.azurestaticapps.net/"
              className="project-site-btn"
              target="_blank"
            >
              <span>
                View Site
                <Arrow />
              </span>
            </a>
            {!isDarkMode && (
              <a
                href="https://github.com/Tapiwamaz/SDP-project"
                target="_blank"
              >
                {" "}
                <img src={GithubIcon} alt="Github" className="social-icon" />
              </a>
            )}
            {isDarkMode && (
              <a
                className="social-icon"
                href="https://github.com/Tapiwamaz/SDP-project"
              >
                <GitHubDarkIcon />
              </a>
            )}
          </div>
        </div>
        <div className="project-demo">
          <LiveApp siteUrl="https://delightful-forest-0475dad03.5.azurestaticapps.net/" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
