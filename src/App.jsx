import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <TodoForm addTodo={addTodo} />

      <TodoList todos={todos} />
    </div>
  );
}

export default App;