import { useState, useContext, useRef } from "react";
import { ListContext } from "../context/ListContext.js";
import { MealCard } from "../components/MealCard.jsx";

export function Meals() {
  const [isOpen, setIsOpen] = useState(false);
  const { list, setList } = useContext(ListContext);
  const formRef = useRef(null);

  const findAvailableID = (items) => {
    const existingIDs = items.map((item) => item.id);
    let id = 1;
    while (existingIDs.includes(id)) {
      id++;
    }
    return id;
  };

  const addDish = (name, category, prepTime, difficulty, healthy) => {
    const newDish = {
      id: findAvailableID(list),
      name: name, // Assigned from form variable
      category: category, // Assigned from form variable
      prepTime: prepTime, // Assigned from form variable
      difficulty: difficulty, // Assigned from form variable
      healthy: healthy, // Assigned from form variable
      favourite: false,
      timesCooked: 0,
      lastCooked: null,
    };
    console.log(newDish);
    setList([...list, newDish]);
  };
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(formRef.current);
    const formValues = Object.fromEntries(data.entries());

    const {
      dishName,
      dishCategory,
      dishPrepTime,
      dishDifficulty,
      dishHealthy,
    } = formValues;

    addDish(dishName, dishCategory, dishPrepTime, dishDifficulty, dishHealthy);
    console.log("New Dish Added!");

    formRef.current.reset();
    closeModal();
  };
  return (
    <>
      <div className="bg-blue-800 p-5">
        <h1 className="my-2 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 sm:text-6xl text-balance">
          Meals
        </h1>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-200 "
          onClick={openModal}
        >
          Add Dish
        </button>

        {isOpen && (
          <div className="bg-white p-2 my-3 rounded-xl ">
            <h3 className="text-lg font-bold tracking-wider text-slate-600 uppercase">
              Enter Dish info
            </h3>

            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="py-2">
                <label className="text-md font-medium text-slate-700 " name="">
                  Name:{" "}
                </label>
                <input
                  className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
           focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
           disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none"
                  type="text"
                  name="dishName"
                  required
                />
              </div>

              <div className="py-2">
                <label className="text-md font-medium text-slate-700">
                  Category:
                  <select
                    className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 shadow-sm outline-none transition-all hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    name="Category"
                    id="Category"
                    required
                    name="dishCategory"
                  >
                    <option value="">select</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option>
                  </select>
                </label>
              </div>

              <div className="py-2">
                <label className="text-md font-medium text-slate-700">
                  prep Time:{" "}
                </label>
                <input
                  className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
           focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
           disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none"
                  type="text"
                  required
                  name="dishPrepTime"
                />
              </div>

              <div className="py-2">
                <label className="text-md font-medium text-slate-700">
                  Difficulty:{" "}
                </label>
                <select
                  className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 shadow-sm outline-none transition-all hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  name="Difficulty"
                  id="Difficulty"
                  name="dishDifficulty"
                >
                  <option value="">select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="py-2">
                <label className="text-md font-medium text-slate-700">
                  Healthy:{" "}
                </label>
                <select
                  className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 shadow-sm outline-none transition-all hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  name="Healthy"
                  id="Healthy"
                  required
                  name="dishHealthy"
                >
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>

              <div className="py-2 flex justify-around">
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

      <div className="">
        <h1 className="p-5 my-2 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 sm:text-6xl text-balance">
          Meals display
        </h1>
        <div className="">
          <MealCard dishList={list} />
        </div>
      </div>
    </>
  );
}

export default Meals;
