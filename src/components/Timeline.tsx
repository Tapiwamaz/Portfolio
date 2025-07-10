import "./Timeline.css";

const Timeline = () => {
  return (
    <section className="timeline-section" id="timeline">
      <h2 className="section-title">Timeline</h2>
      <div className="timeline-grid">
        <article className="timeline-item mid-dot">
          <div className="timeline-card ">
            <h3>BSc Computer Science and Computer Applications </h3>
            <span className="timeline-duration">2022-2024</span>
            <h4>University of the Witswatersrand</h4>
            <p className="yap">
              I earned my Bachelor of Science in Computer Science from the
              University of the Witwatersrand, where I developed a strong
              foundation in algorithms, software engineering, and system design.
              Through coursework and projects, I gained hands-on experience in
              programming (Python, Java, C++), database systems, and web
              development, preparing me for real-world technical challenges. My
              degree also emphasized problem-solving and computational thinking,
              equipping me with the skills to build efficient and innovative
              software solutions.
            </p>
          </div>
        </article>
        <span className="line-divider" />
        <article></article>
        <article className="mid-dot"></article>
        <span className="line-divider" />
        <article className="timeline-item">
          <div className="timeline-card">
            <h3>Honors in Computer Science</h3>
            <span className="timeline-duration">2025-Present</span>
            <h4>University of the Witswatersrand</h4>
            <p className="yap">
              During my Honors in Computer Science at the University of the
              Witwatersrand, I am specializing in machine learning, focusing on
              representation learning techniques for high-dimensional
              multi-spectral images. My research explores methods to efficiently
              extract and compress meaningful features from complex datasets,
              improving classification and analysis in remote sensing
              applications. Using deep learning frameworks (TensorFlow/PyTorch),
              I developed models to enhance interpretability while maintaining
              accuracy.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Timeline;
