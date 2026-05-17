import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    // navbar
    <>
      <nav className="flex justify-between items-center px-8 py-4 bg-amber-900 text-white">
        <h1
          className="text-2xl font-bold "
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Artisan Cafe
        </h1>
        <div className="flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-200 hover:text-amber-200 hover:-translate-y-0.5 ${
                isActive
                  ? "text-amber-200 border-b-2 border-amber-200 pb-1"
                  : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-200 hover:text-amber-200 hover:-translate-y-0.5 ${
                isActive
                  ? "text-amber-200 border-b-2 border-amber-200 pb-1"
                  : ""
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-200 hover:text-amber-200 hover:-translate-y-0.5 ${
                isActive
                  ? "text-amber-200 border-b-2 border-amber-200 pb-1"
                  : ""
              }`
            }
          >
            Admin
          </NavLink>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
