import { useState, useEffect } from "react";
import CoffeeList from "../components/CoffeeList";

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

      {/* coffee varieties Area */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Our Coffees</h1>

        <CoffeeList coffees={filteredCoffees}/>
      </main>
    </div>
  );
}
