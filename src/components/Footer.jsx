import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://github.com/likhitha0091"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/likhitha-sunkara"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
