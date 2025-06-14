import "./Education.css";

const Education = () => {
  const education = [
    {
      title: "Honors: Computer Science",
      description: "Reaserch included with coursework directed toward ML",
      duration: "2025-Present",
      location: "University of the Witswatersrand",
      index: 0,
    },
    ,
    {
      title: "BSc: Computer Science and Computer Applications",
      description: "All pf relveant information.....",
      duration: "2022-2024",
      location: "University of the Witswatersrand",
      index: 1,
    },
  ];
  return (
    <section className="education-section">
      <h2>Education</h2>
      {/* {education.map((e) => (
        <div className="timeline-item" key={e?.title}>
          {e?.index % 2 === 1 && <span className="line-divider"></span>}
          <div className="timeline-card">
            <h3>{e?.title}</h3>
          </div>
          {e?.index % 2 === 0 && <span className="line-divider"></span>}
        </div>
      ))} */}
    </section>
  );
};

export default Education;
