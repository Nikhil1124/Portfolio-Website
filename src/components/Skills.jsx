import './skills.css';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'SQL', level: 75 },
  ];

  return (
    <section id="skills" className="section skills-section skill">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map(({ name, level }) => (
          <div key={name} className="skill-bar">
            <span className="skill-name">{name}</span>
            <div className="progress-bar">
              <div
                className="progress-level"
                style={{ width: `${level}%` }}
                aria-label={`${name} skill level ${level} percent`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
