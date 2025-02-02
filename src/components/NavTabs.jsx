import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation(); // Gets the current URL path

  return (
    <ul
      className="nav nav-tabs justify-content-center"
      style={{ backgroundColor: "#0D3B66" }}
    >
      <li className="nav-item">
        <Link
          to="/about"
          className={
            location.pathname === "/about" ? "nav-link active" : "nav-link"
          }
          style={{ color: "#786F52" }}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={
            location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
          }
          style={{ color: "#786F52" }}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? "nav-link active" : "nav-link"
          }
          style={{ color: "#786F52" }}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={
            location.pathname === "/resume" ? "nav-link active" : "nav-link"
          }
          style={{ color: "#786F52" }}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;