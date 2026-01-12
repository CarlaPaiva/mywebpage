import "./index.css";
import LinkedIn from "../../icons/linkedin";
import GitHub from "../../icons/github";
import Curriculum from "../../icons/curriculum";
import ThemeToggle from "../toggle-theme";

const Header = () => {
  return (
    <div>
      <div className="theme">
        <ThemeToggle />
      </div>
      <div className="header">
        <h1>Carla Paiva</h1>
        {/* <h2>Fullstack Software Developer</h2> */}
        <ul className="header__icons">
          <li title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/carla-paiva/"
              target="_blank"
              aria-label="LinkedIn button"
            >
              <LinkedIn />
            </a>
          </li>
          <li title="Github">
            <a
              href="https://github.com/CarlaPaiva"
              target="_blank"
              aria-label="Github button"
            >
              <GitHub />
            </a>
          </li>
          <li title="Curriculum">
            <a
              href="/CV_CarlaPaiva_EN.pdf"
              target="_blank"
              aria-label="Download my curriculum"
            >
              <Curriculum />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
