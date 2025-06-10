
import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/Header";
import { Landing } from "./components/Landing";
import { About } from "./components/About";

function App() {
  return (
    <main>
      <Header/>
      <section className="mid-section">
        <Landing/>
        <About/>
      </section>
      <footer></footer>
    </main>
  );
}

export default App;
