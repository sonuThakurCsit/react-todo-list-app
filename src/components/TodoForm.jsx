import { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("Study");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    addTodo(task, priority, dueDate, category);

    setTask("");
    setPriority("Medium");
    setDueDate("");
    setCategory("Study");
  };

  return (
    <div className="w-full px-5 mt-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">

          {/* Task Input */}
          <input
            type="text"
            placeholder="Write your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="
              flex-1
              border border-gray-300
              dark:border-slate-600
              rounded-lg
              px-4 py-3
              outline-none
              bg-white
              dark:bg-slate-800
              text-gray-900
              dark:text-white
              placeholder-gray-500
              dark:placeholder-gray-400
              focus:ring-2
              focus:ring-yellow-400
              transition
            "
          />

          {/* Priority */}
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="
              border border-gray-300
              dark:border-slate-600
              rounded-lg
              px-4 py-3
              bg-white
              dark:bg-slate-800
              text-gray-900
              dark:text-white
              outline-none
              focus:ring-2
              focus:ring-yellow-400
              transition
            "
          >
            <option value="High">🔴 High</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Low">🟢 Low</option>
          </select>

          {/* Due Date */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-800 dark:text-white">
              Due Date
            </label>

            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="
                border border-gray-300
                dark:border-slate-600
                rounded-lg
                px-4 py-3
                bg-white
                dark:bg-slate-800
                text-gray-900
                dark:text-white
                outline-none
                focus:ring-2
                focus:ring-yellow-400
                transition
              "
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-800 dark:text-white">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                border border-gray-300
                dark:border-slate-600
                rounded-lg
                px-4 py-3
                bg-white
                dark:bg-slate-800
                text-gray-900
                dark:text-white
                outline-none
                focus:ring-2
                focus:ring-yellow-400
                transition
              "
            >
              <option value="Study">📚 Study</option>
              <option value="Work">💼 Work</option>
              <option value="Personal">🏠 Personal</option>
              <option value="Shopping">🛒 Shopping</option>
              <option value="Health">❤️ Health</option>
            </select>
          </div>

          {/* Add Task Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="
                bg-yellow-500
                hover:bg-yellow-600
                text-white
                px-6 py-3
                rounded-lg
                font-semibold
                transition
                hover:scale-105
              "
            >
              Add Task
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default TodoForm;