import { useState } from "react";
import CoffeeList from "../components/CoffeeList";
import useCoffeData from "../hooks/useCoffeeData";
import Searchbar from "../components/Searchbar";

export default function Shop() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [search, setSearch] = useState("");
  const { coffees, loading } = useCoffeData();

  const locations = [
    "Nairobi CBD",
    "Westlands",
    "Karen",
    "Kilimani",
    "Mombasa",
    "Meru"
  ];

  const filteredCoffees = coffees
    .filter((coffee) =>
      selectedLocation ? coffee.location === selectedLocation : true,
    )
    .filter((coffee) =>
      coffee.name.toLowerCase().includes(search.toLowerCase()),
    );
  return (
    <div className="min-h-screen flex  bg-stone-100 flex-col md:flex-row">
      {/* side bar */}
      <aside className="w-full md:w-64 md:p-6 bg-amber-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6 text-center  tracking-wide">
          Locations
        </h2>
        <div className="h-px bg-amber-700 mb-4"></div>
        <ul className="flex md:block gap-2 md:space-y-2 overflow-x-auto items-center">
          {locations.map((city) => (
            <li
              key={city}
              onClick={() =>
                setSelectedLocation((prev) => (prev === city ? null : city))
              }
              className={`cursor-pointer px-3 py-2 rounded-full whitespace-nowrap transition-all duration-300
              ${
                selectedLocation === city
                  ? "bg-amber-50 text-amber-900"
                  : "hover:bg-amber-50 hover:text-amber-900"
              }`}
            >
              {city}
            </li>
          ))}
        </ul>
      </aside>

      {/* coffee varieties Area */}
      <main className="flex-1 p-8">
        {/* search bar */}
        <Searchbar search={search} setSearch={setSearch} />
        <h1 className="text-3xl font-bold mb-6">Our Coffees</h1>

        {loading ? (
          <p className="text-center text-amber-900 font-semibold animate-pulse">
            Loading coffees... ☕
          </p>
        ) : (
          <CoffeeList coffees={filteredCoffees} />
        )}
      </main>
    </div>
  );
}
