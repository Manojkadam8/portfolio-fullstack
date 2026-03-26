import "./../styles/navbar.css";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">Manoj.dev</div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

        <button className="cta">Hire Me</button>

      </div>
    </nav>
  );
}