import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <section className="max-w-5xl mx-auto px-5 mt-8">
      {todos.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500 text-lg">
            No tasks available.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TodoList;