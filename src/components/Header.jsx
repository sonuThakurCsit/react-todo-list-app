function Header() {
  return (
    <header className="bg-slate-900 shadow-md">
      <div className="max-w-5xl mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">
          React Todo
        </h1>

        <p className="text-white text-sm">
          Organize Your Daily Tasks
        </p>
      </div>
    </header>
  );
}

export default Header;