
import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/Header";
import { Landing } from "./components/Landing";

function App() {
  return (
    <main>
      <Header/>
      <section className="mid-section">
        <Landing/>
      </section>
      <footer></footer>
    </main>
  );
}

export default App;
