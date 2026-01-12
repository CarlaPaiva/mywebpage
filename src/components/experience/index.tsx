import "./styles.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="experience__item">
        <h3>
          Senior Software Developer — Enterprise software for the automotive services
          industry (NDA)
        </h3>
        <span className="experience__meta">2025 – Present</span>
        <ul>
          <li>Building and maintaining production systems using .NET 8+ and React.</li>
          <li>
            Working with Azure services such as App Service, Service Bus, Blob Storage,
            and Key Vault.
          </li>
        </ul>
      </div>

      <div className="experience__item">
        <h3>Senior / Mid-level Fullstack Developer — Cyncly</h3>
        <span className="experience__meta">2023 – 2025</span>
        <ul>
          <li>
            Part of a 30+ developer team building a space-planning SaaS used by global
            retailers.
          </li>
          <li>
            Developed backend services in C# (.NET 6 & legacy .NET Framework) and frontend
            with React (microfrontends).
          </li>
          <li>Mentored junior and mid-level developers.</li>
        </ul>
      </div>

      <div className="experience__item">
        <h3>Previous work as Fullstack Developer - Consulting & Product Teams</h3>
        <span className="experience__meta">2018 – 2023</span>
        <ul>
          <li>
            Developed and maintained web, desktop, and mobile applications for multiple
            clients.
          </li>
          <li>
            Designed technical solutions using .NET, Angular, React, React Native, and SQL
            databases
          </li>
          <li>Worked across different industries and business domains.</li>
          <li>Supported CI/CD pipelines and application deployments.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
