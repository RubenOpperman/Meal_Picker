export function MealCard({ dishList }) {
  dishList.map((dishList) => console.log(dishList));

  return (
    <div className="bg-white  w-[full] h-auto p-2 flex-col sm:flex-row ">
      {dishList.map((dish) => (
        <div
          key={dish.id}
          className="w-[95%] max-w-sm border border-gray-100 shadow-md rounded-2xl p-4 m-2 bg-white flex flex-col  justify-between font-sans transition-all duration-200 hover:shadow-lg"
        >
          {/* Top Section: Title and Category Badge */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="text-lg font-bold text-gray-900 leading-tight">
              {dish.name}
            </h2>
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 bg-amber-50 text-amber-700 rounded-md">
              {dish.category}
            </span>
          </div>

          {/* Bottom Section: Separated Metric Grid */}
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100 text-center">
            {/* Prep Time */}
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                Time
              </p>
              <p className="text-sm font-semibold text-gray-700">
                ⏱️ {dish.prepTime}
              </p>
            </div>

            {/* Difficulty */}
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                Level
              </p>
              <p className="text-sm font-semibold text-gray-700">
                📊 {dish.difficulty}
              </p>
            </div>

            {/* Health Status */}
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                Type
              </p>
              <span
                className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full ${
                  dish.healthy
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-gray-50 text-gray-500 border border-gray-200"
                }`}
              >
                {dish.healthy ? "Healthy" : "Standard"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MealCard;
