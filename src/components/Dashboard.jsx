function Dashboard({
  totalTasks,
  activeTasks,
  completedTasks,
  progress,
  categoryCounts,
}) {
  return (
    <div className="max-w-5xl mx-auto px-5 mt-8">
      
      {/* Main Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {/* Total */}
        <div
          className="
            bg-white
            dark:bg-slate-800
            rounded-xl
            shadow
            p-5
            text-center
            transition-all
            duration-500
          "
        >
          <h2 className="text-gray-500 dark:text-gray-300 text-sm">
            Total Tasks
          </h2>

          <p className="text-4xl font-bold text-yellow-500 mt-2">
            {totalTasks}
          </p>
        </div>

        {/* Active */}
        <div
          className="
            bg-white
            dark:bg-slate-800
            rounded-xl
            shadow
            p-5
            text-center
            transition-all
            duration-500
          "
        >
          <h2 className="text-gray-500 dark:text-gray-300 text-sm">
            Active
          </h2>

          <p className="text-4xl font-bold text-blue-500 mt-2">
            {activeTasks}
          </p>
        </div>

        {/* Completed */}
        <div
          className="
            bg-white
            dark:bg-slate-800
            rounded-xl
            shadow
            p-5
            text-center
            transition-all
            duration-500
          "
        >
          <h2 className="text-gray-500 dark:text-gray-300 text-sm">
            Completed
          </h2>

          <p className="text-4xl font-bold text-green-500 mt-2">
            {completedTasks}
          </p>
        </div>

        {/* Progress */}
        <div
          className="
            bg-white
            dark:bg-slate-800
            rounded-xl
            shadow
            p-5
            text-center
            transition-all
            duration-500
          "
        >
          <h2 className="text-gray-500 dark:text-gray-300 text-sm">
            Progress
          </h2>

          <p className="text-4xl font-bold text-purple-500 mt-2">
            {progress}%
          </p>
        </div>
      </div>

      {/* Category Statistics */}
      <div
        className="
          bg-white
          dark:bg-slate-800
          rounded-xl
          shadow
          p-5
          mt-6
          transition-all
          duration-500
        "
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-5">
          Category Overview
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

          {/* Study */}
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-center">
            <div className="text-2xl">
              📚
            </div>

            <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mt-2">
              Study
            </p>

            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">
              {categoryCounts.Study}
            </p>
          </div>

          {/* Work */}
          <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 text-center">
            <div className="text-2xl">
              💼
            </div>

            <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mt-2">
              Work
            </p>

            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">
              {categoryCounts.Work}
            </p>
          </div>

          {/* Personal */}
          <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-4 text-center">
            <div className="text-2xl">
              🏠
            </div>

            <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mt-2">
              Personal
            </p>

            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mt-1">
              {categoryCounts.Personal}
            </p>
          </div>

          {/* Shopping */}
          <div className="bg-pink-50 dark:bg-pink-900/30 rounded-lg p-4 text-center">
            <div className="text-2xl">
              🛒
            </div>

            <p className="text-sm font-semibold text-pink-700 dark:text-pink-300 mt-2">
              Shopping
            </p>

            <p className="text-2xl font-bold text-pink-600 dark:text-pink-400 mt-1">
              {categoryCounts.Shopping}
            </p>
          </div>

          {/* Health */}
          <div className="bg-red-50 dark:bg-red-900/30 rounded-lg p-4 text-center">
            <div className="text-2xl">
              ❤️
            </div>

            <p className="text-sm font-semibold text-red-700 dark:text-red-300 mt-2">
              Health
            </p>

            <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">
              {categoryCounts.Health}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;