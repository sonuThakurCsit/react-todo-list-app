import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useLocalStrorage from "./hooks/useLocalStrorage";
import useTheme from "./hooks/useTheme";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";

function App() {
  const [todos, setTodos] = useLocalStrorage("todos", []);
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");

  const [sortBy, setSortBy] = useState("newest");

  const [darkMode, setDarkMode] = useTheme();

  const addTodo = (task, priority) => {
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,

      priority: priority,

      createdAt: new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  };

  const updateTodo = (id, updatedText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: updatedText,
            }
          : todo,
      ),
    );
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "active") {
      return matchesSearch && !todo.completed;
    }

    if (filter === "completed") {
      return matchesSearch && todo.completed;
    }

    return matchesSearch;
  });

  const priorityOrder = {
    High: 3,
    Medium: 2,
    Low: 1,
  };

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sortBy === "newest") {
      return b.id - a.id;
    }

    if (sortBy === "oldest") {
      return a.id - b.id;
    }

    if (sortBy === "priority") {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }

    return 0;
  });

  const totalTasks = todos.length;

  const completedTasks = todos.filter((todo) => todo.completed).length;

  const activeTasks = totalTasks - completedTasks;

  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const clearCompleted = () => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos);
  };

  const deleteAllTodos = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all tasks?",
    );

    if (!confirmDelete) return;

    setTodos([]);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode ? "bg-slate-900 text-white" : "bg-slate-100 text-black"
      }`}
    >
      <Header />

      <div className="max-w-5xl mx-auto flex justify-end mt-5 px-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <TodoForm addTodo={addTodo} />

      <Dashboard
        totalTasks={totalTasks}
        activeTasks={activeTasks}
        completedTasks={completedTasks}
        progress={progress}
      />

      <div className="max-w-5xl mx-auto mt-6 px-5">
        <SearchBar search={search} setSearch={setSearch} />
        <div className="flex gap-4 mt-4 flex-wrap">
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

        <div className="mt-5 flex gap-6 flex-wrap text-sm font-semibold">
          <p>
            Total :<span className="text-yellow-600"> {totalTasks}</span>
          </p>

          <p>
            Active :<span className="text-blue-600"> {activeTasks}</span>
          </p>

          <p>
            Completed :<span className="text-green-600"> {completedTasks}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={clearCompleted}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Clear Completed
          </button>

          <button
            onClick={deleteAllTodos}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Delete All
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="newest">Newest First</option>

            <option value="oldest">Oldest First</option>

            <option value="priority">Priority</option>
          </select>
        </div>
      </div>

      <TodoList
        todos={sortedTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
