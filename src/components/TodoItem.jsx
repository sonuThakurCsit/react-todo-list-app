function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition">

      {/* Top */}
      <div className="flex items-start gap-3">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 mt-1 accent-yellow-500 cursor-pointer"
        />

        <div className="flex-1">

          <h3
            className={`text-lg font-semibold ${
              todo.completed
                ? "line-through text-gray-400"
                : "text-gray-800"
            }`}
          >
            {todo.text}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Created Today
          </p>

        </div>

      </div>

      {/* Bottom */}

      <div className="flex justify-end gap-3 mt-5">

        <button
          className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition"
        >
          ✏️ Edit
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
        >
          🗑 Delete
        </button>

      </div>

    </div>
  );
}

export default TodoItem;