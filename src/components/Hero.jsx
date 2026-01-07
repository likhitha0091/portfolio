import "../styles/main.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-box">
        <h1 className="hero-name">Likhitha Sunkara</h1>

        <h2 className="hero-title">
          Aspiring <span className="accent">Data Analyst</span>
        </h2>

        <p className="hero-desc">
          Computer Science Engineering student passionate about data-driven
          problem solving, Python, and data analytics. I also have experience in
          web development and I am currently strengthening my problem-solving
          skills through DSA.
        </p>

        <div className="hero-actions">
          <a href={`${process.env.PUBLIC_URL}/Likhitha_Sunkara_Resume.pdf`}
            className="btn" download
          >
            Download Resume
          </a>


        </div>
      </div>
    </section>
  );
};

export default Hero;
