function StatsBar({
  totalTasks,
  activeTasks,
  completedTasks,
}) {
  return (
    <div className="w-full mt-6">

      <div className="flex flex-wrap gap-6 text-sm font-semibold">

        <p>
          Total :
          <span className="text-yellow-600 ml-1">
            {totalTasks}
          </span>
        </p>

        <p>
          Active :
          <span className="text-blue-600 ml-1">
            {activeTasks}
          </span>
        </p>

        <p>
          Completed :
          <span className="text-green-600 ml-1">
            {completedTasks}
          </span>
        </p>

      </div>

    </div>
  );
}

export default StatsBar;