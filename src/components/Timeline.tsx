import "./Timeline.css";

const Timeline = () => {
  return (
    <section className="timeline-section" id="timeline">
      <h2 className="section-title">Timeline</h2>
      <div className="timeline-grid">
        <article className="timeline-item mid-dot">
          <div className="timeline-card ">
            <h3>BSc Computer Science and Computer Applications </h3>
            <span className="timeline-duration">2025-Present</span>
            <h4>University of the Witswatersrand</h4>
            <p>Reaserch included with coursework directed toward ML</p>
          </div>
        </article>
        <span className="line-divider" />
        <article></article>
        <article className="mid-dot"></article>
        <span className="line-divider" />
        <article className="timeline-item">
          <div className="timeline-card">
            <h3>BSc Computer Science and Computer Applications </h3>
            <span className="timeline-duration">2025-Present</span>

            <h4>University of the Witswatersrand</h4>
            <p>Reaserch included with coursework directed toward ML</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Timeline;
