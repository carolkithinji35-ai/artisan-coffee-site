import { useState, useEffect } from "react";
import ProductTable from "../components/ProductTable";

export default function Admin() {
  const [coffees, setCoffees] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");




  useEffect(() => {
    fetch("http://localhost:3001/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  });
  return (
    <div className="min-h-screen   p-10 bg-stone-100">
      <h1 className="text-4xl font-bold text-amber-900 mb-6 text-center">
        {" "}
        Cafe Admin
      </h1>
      <form
        action=""
        className="mt-6 space-y-4 max-w-md bg-white p-6 rounded-2xl shadow mx-auto"
      >
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
          placeholder="Coffee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
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
      <ProductTable coffees={coffees} />
    </div>
  );
}
