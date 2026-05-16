export default function ProductTable({ coffees, setCoffees }) {

  //handle deleting a coffee, use delete request to backend(json.server), that removes coffee from db.json using its id.
  // updates local state

  //
  function handleDelete(id) {
    fetch(`http://localhost:3001/coffees/${id}`, {
      method: "DELETE",
    }).then(() => {
      setCoffees(coffees.filter((coffee) => coffee.id !== id));
    });
  }

  return (
    <div className="mt-6 md:max-w-2/3 mx-auto">
      <ul className="space-y-2">
        {coffees.map((coffee) => (
          <li
            key={coffee.id}
            className="p-3 border  bg-white shadow-sm rounded-lg border-stone-100 hover:shadow-md transition flex justify-between items-center"
          >
            <span> {coffee.name}</span>
            <button onClick={()=>handleDelete(coffee.id)} className="text-red-600 hover:text-red-800">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
