import { useState, useEffect } from "react";
import CoffeeCard from "../components/CoffeeCard";

export default function Shop() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);

  const locations = [
    "Nairobi CBD",
    "Westlands",
    "Karen",
    "Kilimani",
    "Mombasa",
    "Kisumu",
    "Meru",
    "Nakuru",
  ];

  const filteredCoffees = selectedLocation
    ? coffees.filter((coffee) => coffee.location === selectedLocation)
    : coffees;
  return (
    <div className="min-h-screen flex  bg-stone-100">
      {/* side bar */}
      <aside className="w-64 bg-amber-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6 text-center  tracking-wide">
          Locations
        </h2>
        <div className="h-px bg-amber-700 mb-4"></div>
        <ul className="space-y-2">
          {locations.map((city) => (
            <li
              key={city}
              onClick={() =>
                setSelectedLocation((prev) => (prev === city ? null : city))
              }
              className={`cursor-pointer px-3 py-2 rounded-md transition-all duration-300
                ${selectedLocation === city ? "bg-amber-50 text-amber-900" : "hover:bg-amber-50 hover:text-amber-900"}`}
            >
              {city}
            </li>
          ))}
        </ul>
      </aside>

      {/* coffee variety Area */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Our Coffees</h1>

        {filteredCoffees.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            <h2 className="text-2xl font-semibold mb-2">
              No coffees in this city for now☕
            </h2>
            <p>Try selecting another location.</p>
          </div>
        ) : (
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCoffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
