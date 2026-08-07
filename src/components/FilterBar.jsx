function FilterBar({
  filter,
  setFilter,
  categoryFilter,
  setCategoryFilter,
  sortBy,
  setSortBy,
  clearCompleted,
  deleteAllTodos,
}) {
  return (
    <div className="max-w-5xl mx-auto px-5 mt-6">
      {/* Status Filters */}
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => setFilter("all")}
          className={`px-5 py-2 rounded-lg transition-all duration-300 ${
            filter === "all"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 dark:bg-slate-700 dark:text-white hover:bg-gray-300 dark:hover:bg-slate-600"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("active")}
          className={`px-5 py-2 rounded-lg transition-all duration-300 ${
            filter === "active"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-slate-700 dark:text-white hover:bg-gray-300 dark:hover:bg-slate-600"
          }`}
        >
          Active
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`px-5 py-2 rounded-lg transition-all duration-300 ${
            filter === "completed"
              ? "bg-green-500 text-white"
              : "bg-gray-200 dark:bg-slate-700 dark:text-white hover:bg-gray-300 dark:hover:bg-slate-600"
          }`}
        >
          Completed
        </button>
      </div>

      {/* Category Filter */}
      <div className="mt-5">
        <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
          Filter by Category
        </label>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="
            w-full
            sm:w-auto
            min-w-[220px]
            border
            border-gray-300
            dark:border-slate-600
            rounded-lg
            px-4
            py-3
            bg-white
            dark:bg-slate-800
            text-gray-800
            dark:text-white
            outline-none
            transition-all
            duration-300
            focus:ring-2
            focus:ring-yellow-400
          "
        >
          <option value="all">📋 All Categories</option>
          <option value="Study">📚 Study</option>
          <option value="Work">💼 Work</option>
          <option value="Personal">🏠 Personal</option>
          <option value="Shopping">🛒 Shopping</option>
          <option value="Health">❤️ Health</option>
        </select>
      </div>

      {/* Action Buttons + Sort */}
      <div className="flex flex-wrap gap-3 mt-5">
        <button
          onClick={clearCompleted}
          className="
            bg-green-500
            hover:bg-green-600
            text-white
            px-4
            py-2
            rounded-lg
            transition-all
            duration-300
          "
        >
          Clear Completed
        </button>

        <button
          onClick={deleteAllTodos}
          className="
            bg-red-500
            hover:bg-red-600
            text-white
            px-4
            py-2
            rounded-lg
            transition-all
            duration-300
          "
        >
          Delete All
        </button>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="
            border
            border-gray-300
            dark:border-slate-600
            rounded-lg
            px-4
            py-2
            bg-white
            dark:bg-slate-800
            text-gray-800
            dark:text-white
            transition-all
            duration-300
          "
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