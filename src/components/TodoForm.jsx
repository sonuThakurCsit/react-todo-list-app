import { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    addTodo(task);
    setTask("");
  };

  return (
    <section className="max-w-5xl mx-auto px-5 mt-10">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4"
        >
          <input
            type="text"
            placeholder="Write your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 rounded-lg px-8 py-3 font-semibold transition duration-300"
          >
            Add Task
          </button>
        </form>
      </div>
    </section>
  );
}

export default TodoForm;