import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/Header";
import { Landing } from "./components/Landing";
import { About } from "./components/About";
import Timeline from "./components/Timeline";
import { Contact } from "./components/Contact";

function App() {
  return (
    <main>
      <Header />
      <section className="mid-section">
        <Landing />
        <h2 className="section-title">About Me</h2>
        <About />
        <Timeline />
        <Contact/>
      </section>
      <footer></footer>
    </main>
  );
}

export default App;
