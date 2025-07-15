import React, { useState } from "react";
import "./Carousel.css";
import { TimelineEvents } from "../assets/Helpers";

const Carousel = () => {
  const [itemNo, setItemNo] = useState<number>(0);
  const [item, setItem] = useState<TimelineItem>(TimelineEvents[itemNo]);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.touches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    let i = itemNo;
    if (touchStart - touchEnd >= 50) {
      i = i + 1;
    } else if (touchEnd - touchStart >= 50) {
      i = i - 1;
    }

    if (i >= 0 && i < TimelineEvents.length) {
      setItemNo(i);
      setItem(TimelineEvents[i]);
    }
  };
  return (
    <section className="carousel-container" id="carousel">
      <h2 className="section-title">Timeline</h2>
      <section className="carousel">
        <article
          className="carousel-item"
          onTouchStart={(e) => onTouchStart(e)}
          onTouchEnd={() => onTouchEnd()}
          onTouchMove={(e) => onTouchMove(e)}
        >
          <h3 className="item-title">{item.title}</h3>
          <h4>{item.location}</h4>
          <p className="item-time">{item.time}</p>
          <p className="yap">{item.content}</p>
        </article>
      </section>
      <div className="bubbles-container">
        {TimelineEvents.map((_, i) => (
          <span
            key={i}
            className={itemNo === i ? "bubble active-bubble" : "bubble"}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
