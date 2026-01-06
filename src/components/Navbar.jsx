import "../styles/main.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <span className="nav-logo">Likhitha Sunkara</span>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
