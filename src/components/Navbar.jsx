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
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/admin">Admin</Link>
          <Link
            to="/shop"
            className="bg-stone-100 px-3 py-2 rounded-full hover:bg-amber-900 transition-all duration-300 text-amber-900 hover:text-white "
          >
            Shop Now
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
