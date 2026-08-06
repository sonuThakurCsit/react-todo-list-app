function TodoItem({ todo }) {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
      <span className="text-lg font-medium">
        {todo.text}
      </span>

      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
        Delete
      </button>
    </div>
  );
}

export default TodoItem;