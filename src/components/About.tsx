import "./About.css";
import ReactIcon from "/React.svg";
import JavaIcon from "/Java.svg";
import NodeJSIcon from "/NodeJS.svg";
import JSIcon from "/JS.svg";
import AzureIcon from "/Azure.svg";
import FirebaseIcon from "/Firebase.svg";
import PythonIcon from "/Python.svg";
import TypescriptIcon from "/Typescript.svg";
import TailwindIcon from "/Tailwind.svg";
import SQLIcon from "/SQL.svg";
import PostgresIcon from "/Postgres.svg";
import PHPIcon from "/PHP.svg";
import HTMLIcon from "/HTML.svg";

export const About = () => {
  const frameworks = [
    // Frontend
    { name: "React", icon: ReactIcon, category: "Frontend" },
    { name: "JavaScript", icon: JSIcon, category: "Frontend" },
    { name: "TypeScript", icon: TypescriptIcon, category: "Frontend" },
    { name: "HTML", icon: HTMLIcon, category: "Frontend" },
    { name: "Tailwind", icon: TailwindIcon, category: "Frontend" },

    // Backend
    { name: "Node.js", icon: NodeJSIcon, category: "Backend" },
    { name: "Python", icon: PythonIcon, category: "Backend" },
    { name: "PHP", icon: PHPIcon, category: "Backend" },
    { name: "Java", icon: JavaIcon, category: "Backend" },

    // Database & Cloud
    { name: "SQL", icon: SQLIcon, category: "Database" },
    { name: "PostgreSQL", icon: PostgresIcon, category: "Database" },
    { name: "Firebase", icon: FirebaseIcon, category: "Cloud" },
    { name: "Azure", icon: AzureIcon, category: "Cloud" },
  ];

  return (
    <div className="about-section" id="about">
      <section className="profile">
        <img className="profile-pic" alt="profile-pic" src="./DP.jpg"></img>
        <div className="pulse-container">
          <p>Active for work pulse</p>
          <div className="pulse-icon" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          reiciendis? Ad vero quod id incidunt a quaerat voluptatibus
          praesentium molestiae, nemo voluptatem hic. Eum distinctio sint atque
          exercitationem nulla suscipit?
        </p>
      </section>

      <section className="frameworks">
        <h3>Skills and technologies</h3>
        <h4>Frontend</h4>
        <ul>
          {frameworks
            .filter((f) => f.category === "Frontend")
            .map((f) => (
              <li key={f.name}>
                <span className="framework-tooltip">{f.name}</span>
                <img className="framework-icon" src={f.icon} alt={f.name} />
              </li>
            ))}
        </ul>
        <h4>Backend</h4>
        <ul>
          {frameworks
            .filter((f) => f.category === "Backend")
            .map((f) => (
              <li key={f.name}>
                <span className="framework-tooltip">{f.name}</span>
                <img className="framework-icon" src={f.icon} alt={f.name} />
              </li>
            ))}
        </ul>
        <h4>Cloud and Database</h4>
        <ul>
          {frameworks
            .filter(
              (f) => f.category !== "Frontend" && f.category !== "Backend"
            )
            .map((f) => (
              <li key={f.name}>
                <span className="framework-tooltip">{f.name}</span>
                <img className="framework-icon" alt={f.name} src={f.icon} />
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};
