import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Jobarouter</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="careers">Careers</NavLink>
      <NavLink to="help">Help</NavLink>
    </nav>
  );
};

export default Navbar;
