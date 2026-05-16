export default function Searchbar( {search, setSearch} ) {
   
  return (
    <div className="mb-6 flex justify-center">
      <input
        type="text"
        placeholder="Search coffee......"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2  px-4 py-2 rounded-lg border border-stone-300 focus:outline-none  mt-3 focus:shadow"
      />
    </div>
  );
}