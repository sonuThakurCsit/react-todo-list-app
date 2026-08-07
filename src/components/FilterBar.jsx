function FilterBar({
  filter,
  setFilter,
  sortBy,
  setSortBy,
  clearCompleted,
  deleteAllTodos,
}) {
  return (
    <div className="w-full mt-6">

      {/* Filter Buttons */}
      <div className="flex gap-4 flex-wrap">

        <button
          onClick={() => setFilter("all")}
          className={`px-5 py-2 rounded-lg transition-all duration-300 ${
            filter === "all"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 dark:bg-slate-700 dark:text-white hover:bg-gray-300"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("active")}
          className={`px-5 py-2 rounded-lg transition-all duration-300 ${
            filter === "active"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-slate-700 dark:text-white hover:bg-gray-300"
          }`}
        >
          Active
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`px-5 py-2 rounded-lg transition-all duration-300 ${
            filter === "completed"
              ? "bg-green-500 text-white"
              : "bg-gray-200 dark:bg-slate-700 dark:text-white hover:bg-gray-300"
          }`}
        >
          Completed
        </button>

      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-6">

        <button
          onClick={clearCompleted}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          Clear Completed
        </button>

        <button
          onClick={deleteAllTodos}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Delete All
        </button>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-lg px-3 py-2 bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="priority">Priority</option>
        </select>

      </div>

    </div>
  );
}

export default FilterBar;