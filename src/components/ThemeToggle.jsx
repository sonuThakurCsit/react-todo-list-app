function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-end mb-2 p-6">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 mt-6 px-3"
      >
        {darkMode ? " Light Mode" : " Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;