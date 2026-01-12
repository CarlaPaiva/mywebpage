import "./styles.css";

const PersonalProjects = () => {
  return (
    <section className="projects">
      <h2>Personal Projects</h2>
      <p className="section__intro">
        Projects I work on in my own time, outside of client and company work.
      </p>
      <div className="projects__list">
        <div className="project">
          <h3>MediaTransmute</h3>
          <p>
            Client-side video conversion tool built to avoid server costs and preserve
            user privacy.
          </p>
          <ul className="project__stack">
            <li>React</li>
            <li>FFmpeg</li>
            <li>WASM</li>
            <li>Azure</li>
          </ul>
          <p>
            <a href="https://mediatransmute.carlapaiva.com/">View project</a>
          </p>
          <p>
            <a href="https://github.com/CarlaPaiva/media-transmute">Github repo</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
