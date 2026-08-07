function Dashboard({
  totalTasks,
  activeTasks,
  completedTasks,
  progress,
}) {
  return (
    <div  className="mt-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 text-center transition-all duration-300">
          <h2 className="text-gray-500 dark:text-gray-300 text-sm font-semibold">
            Total Tasks
          </h2>

          <p className="text-4xl font-bold text-yellow-500 mt-3">
            {totalTasks}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 text-center transition-all duration-300">
          <h2 className="text-gray-500 dark:text-gray-300 text-sm font-semibold">
            Active Tasks
          </h2>

          <p className="text-4xl font-bold text-blue-500 mt-3">
            {activeTasks}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 text-center transition-all duration-300">
          <h2 className="text-gray-500 dark:text-gray-300 text-sm font-semibold">
            Completed
          </h2>

          <p className="text-4xl font-bold text-green-500 mt-3">
            {completedTasks}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 text-center transition-all duration-300">
          <h2 className="text-gray-500 dark:text-gray-300 text-sm font-semibold">
            Progress
          </h2>

          <p className="text-4xl font-bold text-purple-500 mt-3">
            {progress}%
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;