import "../styles/main.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="accent">Contact</h2>

        <p style={{ marginTop: "10px" }}>
          Feel free to reach out for opportunities or collaboration.
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xaqnggdk"
          method="POST"
          style={{ marginTop: "30px", maxWidth: "500px" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            style={{ width: "100%", padding: "10px" }}
          />

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>

        
      </div>
    </section>
  );
};

export default Contact;
