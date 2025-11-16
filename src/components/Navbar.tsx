import { Link } from "react-router-dom";

import logoImage from "../assets/weather-app.png";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={logoImage} alt="Logo" />
      </Link>
      <Link to="/cities">
        <img src={logoImage} alt="Logo" />
      </Link>
      <Link to="/map">
        <img src={logoImage} alt="Logo" />
      </Link>
      <Link to="/calendar">
        <img src={logoImage} alt="Logo" />
      </Link>
      <Link to="/settings">
        <img src={logoImage} alt="Logo" />
      </Link>
    </nav>
  );
}
