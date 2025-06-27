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
import HTMLDarkIcon from "/HTMLDark.svg";
import { useAppContext } from "../AppContext/AppContext";

export const About = () => {
  const {isDarkMode} = useAppContext();


  const frameworks = [
    // Frontend
    { name: "React", icon: ReactIcon, category: "Frontend", both:true },
    { name: "JavaScript", icon: JSIcon, category: "Frontend", both:true },
    { name: "TypeScript", icon: TypescriptIcon, category: "Frontend", both:true },
    { name: "HTML", icon: HTMLIcon, category: "Frontend" , both:false ,dark :false},
    { name: "HTML", icon: HTMLDarkIcon, category: "Frontend" , both:false,dark: true},
    { name: "Tailwind", icon: TailwindIcon, category: "Frontend" , both:true},

    // Backend
    { name: "Node.js", icon: NodeJSIcon, category: "Backend" , both:true},
    { name: "Python", icon: PythonIcon, category: "Backend" , both:true},
    { name: "PHP", icon: PHPIcon, category: "Backend" , both:true},
    { name: "Java", icon: JavaIcon, category: "Backend" , both:true},

    // Database & Cloud
    { name: "SQL", icon: SQLIcon, category: "Database" , both:true},
    { name: "PostgreSQL", icon: PostgresIcon, category: "Database" , both:true},
    { name: "Firebase", icon: FirebaseIcon, category: "Cloud", both:true },
    { name: "Azure", icon: AzureIcon, category: "Cloud" , both:true },
  ].filter(f => f.both || f.dark===isDarkMode);



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
