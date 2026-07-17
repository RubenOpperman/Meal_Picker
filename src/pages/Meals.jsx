import { useState } from "react";

export function Meals() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New Dish Added!");
    closeModal();
  };
  return (
    <>
      <div className="bg-blue-800 p-5">
        <h1>Navbar</h1>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-200"
          onClick={openModal}
        >
          Add Dish
        </button>

        {isOpen && (
          <div className="bg-white p-2 ">
            <h3>Enter Dish info</h3>

            <form onSubmit={handleSubmit}>
              <div>
                <label>Name: </label>
                <input
                  className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
           focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
           disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none"
                  type="text"
                  required
                />
              </div>

              <div>
                <label>
                  Category:
                  <select
                    className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 shadow-sm outline-none transition-all hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    name="Category"
                    id="Category"
                    required
                  >
                    <option value="">select</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option>
                  </select>
                </label>
              </div>

              <div>
                <label>prep Time: </label>
                <input
                  className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
           focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
           disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none"
                  type="text"
                  required
                />
              </div>

              <div>
                <label>Difficulty: </label>
                <select
                  className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 shadow-sm outline-none transition-all hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  name="Difficulty"
                  id="Difficulty"
                >
                  <option value="">select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div>
                <label>Healthy: </label>
                <select
                  className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 shadow-sm outline-none transition-all hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  name="Healthy"
                  id="Healthy"
                  required
                >
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>

              <div>
                {/* Cancel Button */}
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-200"
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                {/* Submit Button */}
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-200"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <div>
        <h1> Meals display</h1>
      </div>
    </>
  );
}

export default Meals;
