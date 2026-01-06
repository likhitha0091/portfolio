import "../styles/main.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="accent">About Me</h2>

        <div className="section-box">
          <p style={{ lineHeight: "1.8" }}>
            I am an aspiring Data Analyst with a strong interest in Python and
            data-driven problem solving. I enjoy working with data, extracting
            insights, and building practical solutions through real-world
            projects.
          </p>

          <p style={{ marginTop: "14px", lineHeight: "1.8" }}>
            Along with data analytics, I have hands-on experience in web
            development and I am currently learning Data Structures and
            Algorithms to strengthen my problem-solving skills. I believe in
            continuous learning and growing through consistent practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
