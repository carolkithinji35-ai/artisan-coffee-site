
export default function Shop() {
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
  return (
    <div className="min-h-screen flex  bg-stone-100">
      {/* side bar */}
      <aside className="w-64 bg-amber-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6 text-center underline tracking-wide">
          Locations
        </h2>
        <div className="h-px bg-amber-700 mb-4"></div>
        <ul className="space-y-2">
          {locations.map((city) => (
            <li
              key={city}
              className="cursor-pointer px-3 rounded-md hover:bg-amber-50 hover:text-amber-900 py-2 transition-all duration-300"
            >
              {city}
            </li>
          ))}
        </ul>
      </aside>

      {/* coffee variety Area */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Our Coffees</h1>

        <p className="text-gray-600">
          Select a location to view available coffees.
        </p>
      </main>
    </div>
  );
}
