import Header from "./components/Header";
import TodoForm from "./components/TodoForm"
function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <h1 className="text-5xl font-bold text-yellow-400">
        <Header />
      </h1>
    </div>
  );
}

export default App;