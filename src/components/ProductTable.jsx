export default function ProductTable({ coffees }) {
  return (
    <div className="mt-6 md:max-w-2/3 mx-auto">
      <ul className="space-y-2">
        {coffees.map((coffee) => (
          <li key={coffee.id} className="p-2 border  bg-white shadow-sm rounded-lg border-stone-100 hover:shadow-md transition">
            {coffee.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
