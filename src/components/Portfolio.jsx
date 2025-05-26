import './portfolio.css';

export default function Portfolio() {
  const projects = [
    {
      name: 'Static Products Web-Site',
      description: 'A clean and responsive e-commerce product showcase built with React and Node.js, demonstrating product listing and basic shopping cart functionality.',
      github: 'https://github.com/Nikhil1124/Basic-Shopping-Product-Page',
      demo: 'https://vercel.com/nikhil1124s-projects/basic-shopping-product-page',
    },
    {
      name: 'Todo-Application',
      description: 'A simple, mobile-friendly task management app created with React and CSS, featuring intuitive UI for adding, completing, and deleting tasks.',
      github: 'https://github.com/Nikhil1124/Todo-Application',
      demo: 'https://todo-application-topaz.vercel.app',
    },
    {
      name: 'Speed-Typing App',
      description: 'An interactive web app designed to improve typing speed and accuracy, with real-time scoring and user-friendly controls.',
      github: 'https://github.com/Nikhil1124/Simple-Speed-Typing-Application',
      demo: 'https://simple-speed-typing-application.vercel.app',
    },
  ];

  return (
    <section id="portfolio" className="section portfolio-section">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map(({ name, description, github, demo }) => (
          <div key={name} className="project-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="project-links">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${name}`}
                >
                  GitHub
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo for ${name}`}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
