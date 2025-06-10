import "./About.css";

export const About = () => {
  return (
    <div className="about-section">
      <section className="profile">
        <img className="profile-pic" alt="profile-pic" src="./DP.jpg"></img>
        <p>Active for work pulse</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          reiciendis? Ad vero quod id incidunt a quaerat voluptatibus
          praesentium molestiae, nemo voluptatem hic. Eum distinctio sint atque
          exercitationem nulla suscipit?
        </p>
      </section>
      <section className="frameworks">
        <h2>Frameworks</h2>
        <ul className="frameworks-ul">
            <li>React</li>
            <li>TypeScript</li>
            <li>NodeJS</li>
            <li>Python</li>
        </ul>
      </section>
    </div>
  );
};
