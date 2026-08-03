export function Filter() {
  return (
    <div className="w-full max-w-md sm:rounded-3xl bg-slate-800/95 backdrop-blur-lg shadow-2xl border border-slate-700 p-6">
      <h2 className="text-2xl font-bold text-white mb-6">🔍 Filter Meals</h2>

      <div className="space-y-5">
        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-semibold text-slate-300 mb-2"
          >
            Category
          </label>

          <select
            id="category"
            className="w-full rounded-xl border border-slate-600 bg-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option>All</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Dessert</option>
          </select>
        </div>

        {/* Prep Time */}
        <div>
          <label
            htmlFor="prepTime"
            className="block text-sm font-semibold text-slate-300 mb-2"
          >
            Max Prep Time (minutes)
          </label>

          <input
            id="prepTime"
            type="number"
            placeholder="e.g. 30"
            className="w-full rounded-xl border border-slate-600 bg-slate-700 text-white px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Difficulty */}
        <div>
          <label
            htmlFor="difficulty"
            className="block text-sm font-semibold text-slate-300 mb-2"
          >
            Difficulty
          </label>

          <select
            id="difficulty"
            className="w-full rounded-xl border border-slate-600 bg-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option>All</option>
            <option>⭐ 1</option>
            <option>⭐⭐ 2</option>
            <option>⭐⭐⭐ 3</option>
            <option>⭐⭐⭐⭐ 4</option>
            <option>⭐⭐⭐⭐⭐ 5</option>
          </select>
        </div>

        {/* Healthy */}
        <label className="flex items-center justify-between rounded-xl bg-slate-700 px-4 py-3 cursor-pointer hover:bg-slate-600 transition">
          <span className="text-white font-medium">🥗 Healthy Only</span>

          <input type="checkbox" className="h-5 w-5 accent-green-500" />
        </label>

        {/* Favourite */}
        <label className="flex items-center justify-between rounded-xl bg-slate-700 px-4 py-3 cursor-pointer hover:bg-slate-600 transition">
          <span className="text-white font-medium">❤️ Favourites</span>

          <input type="checkbox" className="h-5 w-5 accent-red-500" />
        </label>

        <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-500 active:scale-[0.98] transition">
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default Filter;
