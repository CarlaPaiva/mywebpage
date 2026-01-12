import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Header from "./components/header";
import PersonalProjects from "./components/projects";

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Experience />
      <PersonalProjects />
      <Contact />
    </div>
  );
}

export default App;
