function ProgressBar({ progress }) {
  return (
    <div className="max-w-5xl mx-auto px-5 mt-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-5 transition-all duration-300">

        <div className="flex justify-between items-center mb-3">

          <span className="font-semibold dark:text-white">
            Project Progress
          </span>

          <span className="font-bold text-green-500">
            {progress}%
          </span>

        </div>

        <div className="w-full h-4 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">

          <div
            className="h-4 bg-green-500 rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>
    </div>
  );
}

export default ProgressBar;