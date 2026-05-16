import { Link } from "react-router-dom";

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
          <Link
            to="/"
            className="cursor-pointer transition-all duration-200 hover:text-amber-200 hover:-translate-y-0.5"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="cursor-pointer transition-all duration-200 hover:text-amber-200 hover:-translate-y-0.5"
          >
            Shop
          </Link>
          <Link
            to="/admin"
            className="cursor-pointer transition-all duration-200 hover:text-amber-200 hover:-translate-y-0.5"
          >
            Admin
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
