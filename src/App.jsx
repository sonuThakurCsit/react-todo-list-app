import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStrorage";

function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [search, setSearch] = useState("");

 const [filter, setFilter] = useState("all");

  const addTodo = (task) => {
    const newTodo = {
  id: Date.now(),
  text: task,
  completed: false,

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
          : todo
      )
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
          : todo
      )
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

const totalTasks = todos.length;

const completedTasks = todos.filter(
  (todo) => todo.completed
).length;

const activeTasks = totalTasks - completedTasks;

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <TodoForm addTodo={addTodo} />

      <div className="max-w-5xl mx-auto mt-6">

<input
type="text"
placeholder="Search Todo..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full border rounded-lg p-3"
/>

</div>

<div className="flex gap-3 mt-4 flex-wrap">

<button
onClick={()=>setFilter("all")}
className={`px-5 py-2 rounded ${
filter==="all"
?"bg-yellow-500 text-white"
:"bg-gray-200"
}`}
>
All
</button>

<button
onClick={()=>setFilter("active")}
className={`px-5 py-2 rounded ${
filter==="active"
?"bg-blue-500 text-white"
:"bg-gray-200"
}`}
>
Active
</button>

<button
onClick={()=>setFilter("completed")}
className={`px-5 py-2 rounded ${
filter==="completed"
?"bg-green-500 text-white"
:"bg-gray-200"
}`}
>
Completed
</button>

</div>

<div className="mt-5 flex gap-6 flex-wrap text-sm font-semibold">

<p>
Total :
<span className="text-yellow-600">
{" "}
{totalTasks}
</span>
</p>

<p>
Active :
<span className="text-blue-600">
{" "}
{activeTasks}
</span>
</p>

<p>
Completed :
<span className="text-green-600">
{" "}
{completedTasks}
</span>
</p>

</div>

      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;