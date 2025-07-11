import React, { useState } from "react";
import "./Carousel.css";

const events = [
  {
    time: "2022-2024",
    location: "University of the Witwatersrand",
    title: "BSc Computer Science",
    content:
      "I earned my Bachelor of Science in Computer Science from the University of the Witwatersrand, where I developed a strong foundation in algorithms, software engineering, and system design. Through coursework and projects, I gained hands-on experience in programming (Python, Java, C++), database systems, and web development, preparing me for real-world technical challenges. My degree also emphasized problem-solving and computational thinking, equipping me with the skills to build efficient and innovative software solutions.",
  },
  {
    time: "2025-Present",
    location: "University of the Witwatersrand",
    title: "Honors in Computer Science",
    content:
      "During my Honors in Computer Science at the University of the Witwatersrand, I am specializing in machine learning, focusing on representation learning techniques for high-dimensional multi-spectral images. My research explores methods to efficiently extract and compress meaningful features from complex datasets, improving classification and analysis in remote sensing applications. Using deep learning frameworks (TensorFlow/PyTorch), I developed models to enhance interpretability while maintaining accuracy.",
  },
];

// const handleSwipe = ()

const Carousel = () => {
  const [itemNo, setItemNo] = useState<number>(0);
  const [item, setItem] = useState(events[itemNo]);

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

    if (i >= 0 && i < events.length) {
      setItemNo(i);
      setItem(events[i]);
    }
  };
  return (
    <section className="carousel-container">
      <h2 className="section-title">Timeline</h2>
      <section className="carousel">
        <article
          className="carousel-item"
          onTouchStart={(e) => onTouchStart(e)}
          onTouchEnd={(e) => onTouchEnd()}
          onTouchMove={(e) => onTouchMove(e)}
        >
          <h3 className="item-title">{item.title}</h3>
          <h4>{item.location}</h4>
          <p className="item-time">{item.time}</p>
          <p className="yap">{item.content}</p>
        </article>
      </section>
      <div className="bubbles-container">
        {events.map((_, i) => (
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
