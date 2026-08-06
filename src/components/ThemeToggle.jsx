function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="max-w-5xl mx-auto flex justify-end mt-5 px-5">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300"
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;