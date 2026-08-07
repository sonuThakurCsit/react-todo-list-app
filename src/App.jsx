import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useLocalStrorage from "./hooks/useLocalStrorage";
import useTheme from "./hooks/useTheme";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import StatsBar from "./components/StatsBar";
import ProgressBar from "./components/ProgressBar";
import ThemeToggle from "./components/ThemeToggle";
import toast from "react-hot-toast";

function App() {
  const [todos, setTodos] = useLocalStrorage("todos", []);
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");

  const [sortBy, setSortBy] = useState("newest");

  const [darkMode, setDarkMode] = useTheme();

  const addTodo = (task, priority, dueDate, category) => {
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,

      priority: priority,

      dueDate: dueDate,

       category: category,

      createdAt: new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };

    setTodos((prev) => [...prev, newTodo]);

    toast.success(" Todo Added Successfully");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    toast.success("🗑️ Todo Deleted");
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
    toast.success("✔️ Task Status Updated");
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
    toast.success("✏️ Todo Updated");
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
    toast.success("🧹 Completed Tasks Cleared");
  };

  const deleteAllTodos = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all tasks?",
    );

    if (!confirmDelete) return;

    setTodos([]);
    toast.success("❌ All Tasks Deleted");
  };

  
   return (
<div
  className={`min-h-screen transition-colors  ${
    darkMode
      ? "bg-slate-950 text-white"
      : "bg-slate-100 text-gray-900"
  }`}

  >
    <Header />

    <div className="px-6">
    

    <ThemeToggle
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />

    

      <TodoForm addTodo={addTodo} />

      <Dashboard
        totalTasks={totalTasks}
        activeTasks={activeTasks}
        completedTasks={completedTasks}
        progress={progress}
      />

      <ProgressBar progress={progress} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FilterBar
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        clearCompleted={clearCompleted}
        deleteAllTodos={deleteAllTodos}
      />

      <StatsBar
        totalTasks={totalTasks}
        activeTasks={activeTasks}
        completedTasks={completedTasks}
      />

      <TodoList
        todos={sortedTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        updateTodo={updateTodo}
      />
    </div>
    
  </div>
);
}

export default App;
