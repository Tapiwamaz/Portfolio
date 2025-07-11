import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/Header";
import { Landing } from "./components/Landing";
import { About } from "./components/About";
import Timeline from "./components/Timeline";
import { Contact } from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { AppProvider } from "./AppContext/AppContext";
import Projects from "./components/Projects";
import Carousel from "./components/Carousel";

function App() {
  return (
    <main>
      <AppProvider>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Header />
        <section className="mid-section">
          <Landing />
          <h2 className="section-title">About Me</h2>
          <About />
          <Projects />
          <Timeline />
          <Carousel />
          <Contact />
        </section>
        <footer></footer>
        <Analytics mode="production" />
      </AppProvider>
    </main>
  );
}

export default App;
