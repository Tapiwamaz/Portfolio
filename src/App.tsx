import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/Header";
import { Landing } from "./components/Landing";
import { About } from "./components/About";
import Timeline from "./components/Timeline";
import { Contact } from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { AppProvider, useAppContext } from "./AppContext/AppContext";
import Projects from "./components/Projects";
import Carousel from "./components/Carousel";
import { UpArrow } from "./components/Icons";
import { useEffect, useState } from "react";
import Aside from "./components/Aside";

function App() {
  const [scrollVisibilty, setScrollVisibility] = useState(false);
  // const {} = useAppContext()

  const handleScrollVisibility = () => {
    if (window.pageYOffset > 750) {
      setScrollVisibility(true);
    } else {
      setScrollVisibility(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);
  return (
    <main>
      <AppProvider>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Header />
        <section className="mid-section">
          <Landing />
          <Aside/>
          <h2 className="section-title" id="about">About Me</h2>
          <About />
          <Projects />
          <Timeline />
          <Carousel />
          <Contact />
        </section>
        <footer></footer>
        <Analytics mode="production" />
        {scrollVisibilty && (
          <button
            className="to-top-btn"
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            <UpArrow />
          </button>
        )}
      </AppProvider>
    </main>
  );
}

export default App;
