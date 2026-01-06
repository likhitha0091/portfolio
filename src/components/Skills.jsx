import "../styles/main.css";

const Skills = () => {
  const skills = [
    "Python", "Java", "C++",
    "HTML", "CSS", "JavaScript", "React",
    "Git", "GitHub", "Pandas", "Matplotlib"
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="accent">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
