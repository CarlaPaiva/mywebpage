import "./styles.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>

      <p>Interested in working together? Reach out on LinkedIn.</p>

      <ul className="contact__links">
        <li>
          <a
            href="https://www.linkedin.com/in/carla-paiva/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>

        <li>
          <a href="/CV_CarlaPaiva_EN.pdf" target="_blank">
            Download CV
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
