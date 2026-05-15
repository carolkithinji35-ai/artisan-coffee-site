import CoffeeCard from "./CoffeeCard";

function CoffeeList({ coffees }) {
  return (
    <>
      {coffees.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          <h2 className="text-2xl font-semibold mb-2">
            No coffees in this city ☕
          </h2>

          <p>Try selecting another location.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      )}
    </>
  );
}

export default CoffeeList;
