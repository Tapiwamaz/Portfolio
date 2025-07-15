import "./Timeline.css";
import { TimelineEvents } from "../assets/Helpers";

const event = (index: number, item: TimelineItem) => {
  let result = [];
  let article1Class = "";
  let article2Class = "";

  if (index % 2 === 0) {
    article1Class = "timeline-item mid-dot";
    article2Class = "";
  } else {
    article1Class = "mid-dot";
    article2Class = "timeline-item";
  }
  let article1 = (
    <article className={`${article1Class}`}>
      {index % 2 == 0 && (
        <div className="timeline-card ">
          <h3>{item.title}</h3>
          <span className="timeline-duration">{item.time}</span>
          <h4>{item.location}</h4>
          <p className="yap">{item.content}</p>
        </div>
      )}
      {index % 2 == 1 && item.image && <img className="timeline-image" src="/DevComittee.jpeg"></img>}
    </article>
  );
  const lineDivider = <span className="line-divider" />;
  let article2 = (
    <article className={`${article2Class}`}>
      {index % 2 == 1 && (
        <div className="timeline-card ">
          <h3>{item.title}</h3>
          <span className="timeline-duration">{item.time}</span>
          <h4>{item.location}</h4>
          <p className="yap">{item.content}</p>
        </div>
      )}
       {index % 2 == 0 && item.image && <img className="timeline-image" src="/DevComittee.jpeg"></img>}
    </article>
  );

  result.push(article1);
  result.push(lineDivider);
  result.push(article2);

  return result;
};

const Timeline = () => {
  return (
    <section className="timeline-section" id="timeline">
      <h2 className="section-title">Timeline</h2>
      <div className="timeline-grid">{TimelineEvents.map((t, i) => event(i, t))}</div>
    </section>
  );
};

export default Timeline;
