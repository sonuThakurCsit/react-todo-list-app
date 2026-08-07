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

  const getDueStatus = (dueDate) => {
    if (!dueDate) {
      return {
        text: "No Due Date",
        color: "bg-gray-500",
      };
    }

    const today = new Date();
    const due = new Date(dueDate);

    // Time remove
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);

    if (due < today) {
      return {
        text: "Overdue",
        color: "bg-red-500",
      };
    }

    if (due.getTime() === today.getTime()) {
      return {
        text: "Due Today",
        color: "bg-green-500",
      };
    }

    return {
      text: "Upcoming",
      color: "bg-yellow-500",
    };
  };

  const formatDate = (date) => {
    if (!date) return "No Due Date";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const dueStatus = getDueStatus(todo.dueDate);

  const getCategoryStyle = (category) => {
    switch (category) {
      case "Study":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300";

      case "Work":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300";

      case "Personal":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300";

      case "Shopping":
        return "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300";

      case "Health":
        return "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300";

      default:
        return "bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-gray-300";
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white rounded-xl shadow-md border border-gray-200 p-5 mb-5 hover:shadow-lg transition-all duration-300 ">
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

              <div className="mt-3 flex flex-wrap gap-2">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryStyle(
                    todo.category,
                  )}`}
                >
                  {todo.category === "Study" && "📚"}
                  {todo.category === "Work" && "💼"}
                  {todo.category === "Personal" && "🏠"}
                  {todo.category === "Shopping" && "🛒"}
                  {todo.category === "Health" && "❤️"}

                  <span className="ml-1">{todo.category || "No Category"}</span>
                </span>
              </div>

              <div className="mt-2 space-y-1">
                <p className="text-sm text-gray-500">
                  🔥 Priority :
                  <span className="font-semibold ml-1 text-orange-500">
                    {todo.priority}
                  </span>
                </p>

                <p className="text-sm text-gray-500">
                  📅 Due :
                  <span className="font-semibold ml-1 text-blue-500">
                    {formatDate(todo.dueDate)}
                  </span>
                </p>

                <div className="mt-3">
                  {todo.completed ? (
                    <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                      Completed
                    </span>
                  ) : (
                    <span
                      className={`${dueStatus.color} text-white text-xs px-3 py-1 rounded-full`}
                    >
                      {dueStatus.text}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-500">
                  🕒 Created :<span className="ml-1">{todo.createdAt}</span>
                </p>
              </div>
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
