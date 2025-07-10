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
          <p className="yap">
            Univents is a dynamic campus event management platform designed to
            streamline event organization and attendance tracking for
            universities. Built with React for the frontend and powered by
            Firebase for real-time data management, the system offers features
            like event creation, RSVP management, and an admin control
            dashboards. Leveraging Microsoft Azure for cloud hosting and
            scalable storage, Univents ensures reliability and performance even
            during peak usage. This project showcases my ability to develop
            full-stack solutions with modern technologies while prioritizing
            user experience and scalability.
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
