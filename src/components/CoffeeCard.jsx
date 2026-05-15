function CoffeeCard({ coffee }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition-all">
      <img
        src={coffee.image}
        alt={coffee.name}
        className="w-full h-40 object-cover rounded mb-3"
      />

      <h3 className="text-xl font-bold">{coffee.name}</h3>

      <p className="text-sm text-gray-600">{coffee.location}</p>

      <p className="mt-2 text-gray-700">{coffee.description}</p>

      <p className="mt-2 font-semibold">${coffee.price}</p>
    </div>
  );
}

export default CoffeeCard