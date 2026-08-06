import TodoItem from "./TodoItem";

function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
  updateTodo
}) {

  if (todos.length === 0) {
    return (
      <div className="max-w-4xl mx-auto mt-10 px-5">
        <div className="bg-white rounded-xl shadow p-10 text-center">

          <h2 className="text-2xl font-semibold text-gray-700">
            No Tasks Found
          </h2>

          <p className="text-gray-500 mt-2">
            Add your first task to get started.
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 px-5 space-y-5">

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
        />
      ))}

    </div>
  );
}

export default TodoList;