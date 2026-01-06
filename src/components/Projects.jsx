import "../styles/main.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="accent">Projects</h2>

        <div className="projects-grid">

          {/* Resume Screening Tool */}
          <div className="project-box">
            <h3 className="project-title">AI Resume Screening Tool</h3>

            <p className="project-desc">
              A web-based resume–job matching tool that analyzes resume text
              against job descriptions and calculates a relevance score.
              Includes a live deployed demo.
            </p>

            <div className="tech-tags">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Streamlit</span>
              <span className="tech-tag">GitHub</span>
            </div>

            <div className="project-links">
              

              <a
                href="https://github.com/likhitha0091/Resume_Screening_Tool"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Student Performance Analyzer */}
          <div className="project-box">
            <h3 className="project-title">Student Performance Analyzer</h3>

            <p className="project-desc">
              A data analytics project that analyzes student academic performance
              using Python, focusing on data cleaning, grading logic, and
              visualization of insights.
            </p>

            <div className="tech-tags">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Pandas</span>
              <span className="tech-tag">Matplotlib</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/likhitha0091/Student_Performance_Analyzer"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub Repo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
