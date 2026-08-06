import { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    addTodo(task, priority);

    setTask("");
    setPriority("Medium");
  };

  return (
    <div className="max-w-5xl mx-auto mt-6 px-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-5"
      >
        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            placeholder="Write your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border rounded-lg px-4 py-3"
          >
            <option value="High">🔴 High</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Low">🟢 Low</option>
          </select>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Add Task
          </button>

        </div>
      </form>
    </div>
  );
}

export default TodoForm;