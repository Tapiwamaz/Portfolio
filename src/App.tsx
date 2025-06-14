
import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/Header";
import { Landing } from "./components/Landing";
import { About } from "./components/About";
import Education from "./components/Education";

function App() {
  return (
    <main>
      <Header/>
      <section className="mid-section">
        <Landing/>
        <About/>
        <Education/>
      </section>
      <footer></footer>
    </main>
  );
}

export default App;
