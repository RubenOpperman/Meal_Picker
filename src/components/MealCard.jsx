import EditModal from "./EditModal";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
export function MealCard({ dishList, setList }) {
  //dishList.map((dishList) => console.log(dishList));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const list = dishList;

  function RemoveDish(IdToRemove) {
    const confirmed = window.confirm(
      "Are you sure you want to delete This dish?",
    );
    if (confirmed) {
      setList(
        list.filter((dish) => {
          return dish.id !== IdToRemove;
        }),
      );
    }
  }

  const [selectedDish, setSelectedDish] = useState(null);

  function Favourite(dish) {
    const updatedList = list.map((item) => {
      if (item.id === dish.id) {
        //console.log(dish.name);

        return { ...item, favourite: !item.favourite };
      }
      return item;
    });
    console.log("isClicked");
    setList(updatedList);
  }

  function EditDish(dish) {
    setSelectedDish(dish);
    setIsModalOpen(true);
  }

  return (
    <div className="bg-white h-auto p-2 flex flex-col  ">
      {list.map((dish) => (
        <div
          key={dish.id}
          className="w-[95%] max-w-sm border border-gray-100 shadow-md rounded-2xl p-4 m-2 bg-white flex flex-col  justify-between font-sans transition-all duration-200 hover:shadow-lg"
        >
          {/* Top Section: Title and Category Badge */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="text-lg font-bold text-gray-900 leading-tight">
              {dish.name}
            </h2>
            <div className="flex flex-row items-center">
              <span className="shrink-0 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 bg-amber-50 text-amber-700 rounded-md">
                {dish.category}
              </span>
              <span
                onClick={() => {
                  Favourite(dish);
                }}
              >
                {dish.favourite ? (
                  <FaHeart color="#e11d48" /> // Filled Red Heart
                ) : (
                  <FaRegHeart color="#64748b" /> // Outlined Gray Heart
                )}
              </span>
            </div>
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

          <div className="flex justify-even items-center border-t border-slate-100 bg-slate-50/50 p-3 mt-4 rounded-b-xl gap-2">
            <button
              onClick={() => EditDish(dish)}
              className="flex-1 py-2 px-4 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-sm transition-all duration-200 cursor-pointer active:scale-98"
            >
              Edit
            </button>
            <button
              onClick={() => RemoveDish(dish.id)}
              className="flex-1 py-2 px-4 text-sm font-semibold text-rose-600 hover:text-white hover:bg-rose-600 border border-rose-200 hover:border-rose-600 rounded-lg transition-all duration-200 cursor-pointer active:scale-98"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        dish={selectedDish}
        key={selectedDish?.id || "empty"}
        dishList={list}
        setList={setList}
      />
    </div>
  );
}

export default MealCard;
