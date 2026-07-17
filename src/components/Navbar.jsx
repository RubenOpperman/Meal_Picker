import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-start gap-5 text-xl">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Spinner">Spinner</NavLink>
      <NavLink to="/Meals">Meals</NavLink>
    </nav>
  );
}

export default Navbar;
