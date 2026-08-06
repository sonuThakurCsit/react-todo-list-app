function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-5xl mx-auto mt-6 px-5">
      <input
        type="text"
        placeholder="🔍 Search Todo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg p-3 bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white transition-all duration-300 outline-none focus:ring-2 focus:ring-yellow-500"
      />
    </div>
  );
}

export default SearchBar;