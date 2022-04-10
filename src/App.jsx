import "./css.css";
import Topbar from "./components/topbar/topbar";
import Presentation from "./components/presentation/presentation";
import Portfolio from "./components/portfolio/portfolio"
import Projets from "./components/projets/projets"
import Temoignages from "./components/temoignages/temoignages"
import Contact from "./components/contact/contact"
import "./app.scss"

function App() {
  return (
    <main id="home">
      <div className="app">
        <Topbar/>
        <div className="sections">
          <Presentation id="Presentation"/>
          <Portfolio id="Portfolio"/>
          <Projets id="Projets"/>
          <Contact id="Contact"/>
        </div>
      </div>
    </main>
  );
}

export default App;
