import { useState } from "react";

function TodoItem({ todo, deleteTodo, toggleTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() === "") {
      alert("Task cannot be empty.");
      return;
    }

    updateTodo(todo.id, editText.trim());
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition">
      {isEditing ? (
        <>
          {/* Edit Mode */}

          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSave();
              }
            }}
            className="w-full border-2 border-yellow-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <div className="flex justify-end gap-3 mt-5">
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 hover:scale-105 transition-all duration-200 text-white px-5 py-2 rounded-lg"
            >
              Save
            </button>

            <button
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 hover:scale-105 transition-all duration-200 text-white px-5 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Normal Mode */}

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

              <p className="text-sm text-gray-500 mt-1">📅 {todo.createdAt}</p>
              <div className="mt-2">
                {todo.priority === "High" && (
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                    🔴 High Priority
                  </span>
                )}

                {todo.priority === "Medium" && (
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                    🟡 Medium Priority
                  </span>
                )}

                {todo.priority === "Low" && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    🟢 Low Priority
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-5">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all duration-200 text-white px-4 py-2 rounded-lg"
            >
              ✏️ Edit
            </button>

            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 hover:bg-red-600 hover:scale-105 transition-all duration-200 text-white px-4 py-2 rounded-lg"
            >
              🗑 Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
