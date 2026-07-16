import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-around text-3xl">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Spinner">Spinner</NavLink>
    </nav>
  );
}

export default Navbar;
