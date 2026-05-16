import { useState, useEffect } from "react";
import ProductTable from "../components/ProductTable";

export default function Admin() {
  const [coffees, setCoffees] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [editingCoffee, setEditingCoffee] = useState(null);
  //fetch data from db.json server
  useEffect(() => {
    fetch("http://localhost:3001/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  });

  useEffect(() => {
    if (editingCoffee) {
      setName(editingCoffee.name);
      setPrice(editingCoffee.price);
      setLocation(editingCoffee.location);
      setImage(editingCoffee.image);
      setDescription(editingCoffee.description);
    }
  }, [editingCoffee]);

  // handle new coffee, prevent refresh
  // send request to json-server, use Post method to collect and add new coffee data and stringify to convert js object into json format..after, saves new coffee in db.json
  // after fetch, form clears nd prepares for next entry.
  const handleCoffee = (event) => {
    event.preventDefault();
    const newCoffee = {
      name,
      price,
      location,
      image,
      description,
    };

    fetch("http://localhost:3001/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    }).then((addedCoffee) => {
      //uses the latest state
      setCoffees((prev) => [...prev, addedCoffee]);
      setName("");
      setPrice("");
      setLocation("");
      setImage("");
      setDescription("");
    });
  };

  // Handles updating an existing coffee
  // Sends PUT request to backend with updated coffee data
  //Uses editingCoffee.id to target the correct item in db.json
  //  Replaces old coffee data with updated data in backend
  //  Updates local state so UI reflects changes instantly
  // Exits edit mode by clearing editingCoffee
  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/coffees/${editingCoffee.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        location,
        image,
        description,
      }),
    })
      .then((res) => res.json())
      .then((updatedCoffee) => {
        setCoffees(
          coffees.map((coffee) =>
            coffee.id === editingCoffee.id ? updatedCoffee : coffee,
          ),
        );

        setEditingCoffee(null);
      });
  };
  // Handles form submission for both ADD and EDIT modes. Checks if we are editing an existing coffee.If editingCoffee exists, update coffee (PUT).If not , create new coffee (POST)
  function handleSubmit(e) {
    e.preventDefault();
    if (editingCoffee) {
      handleUpdateCoffee(e);
    } else {
      handleCoffee(e);
    }
  }
  return (
    <div className="min-h-screen   p-10 bg-stone-100">
      <h1 className="text-4xl font-bold text-amber-900 mb-6 text-center">
        {" "}
        Cafe Admin
      </h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="mt-6 space-y-4 max-w-md bg-white p-6 rounded-2xl shadow-lg mx-auto"
      >
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
          placeholder="Coffee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-amber-900 hover:bg-amber-800 text-white px-4 py-2 rounded-lg transition-all duration-300">
          Add
        </button>
      </form>
      <ProductTable
        coffees={coffees}
        setCoffees={setCoffees}
        setEditingCoffee={setEditingCoffee}
      />
    </div>
  );
}
