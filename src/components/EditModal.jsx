import { useState } from "react";
export default function EditModal({
  isOpen,
  onClose,
  dish,
  dishList,
  setList,
}) {
  const [formData, setFormData] = useState({
    name: dish?.name || "",
    category: dish?.category || "",
    prepTime: dish?.prepTime || "",
    difficulty: dish?.difficulty || "",
    healthy: String(dish?.healthy ?? false),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedList = dishList.map((item) => {
      if (item.id === dish.id) {
        return {
          ...item,
          ...formData,
          healthy: formData.healthy === "true",
        };
      }
      return item;
    });

    setList(updatedList);
    setTimeout(() => {
      onClose();
    }, 0);
    console.log("Submitted");
  };

  if (!isOpen || !dish) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl w-[90%] max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold"
        >
          ✕
        </button>

        <h1 className="text-xl font-bold mb-4">Edit Dish</h1>

        <div className="bg-white p-2 my-3 rounded-xl ">
          <h3 className="text-lg font-bold tracking-wider text-slate-600 uppercase">
            Enter Dish info
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="py-2">
              <label className="text-md font-medium text-slate-700">
                Name:
              </label>
              <input
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="py-2">
              <label className="text-md font-medium text-slate-700">
                Category:
                <select
                  className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 shadow-sm outline-none transition-all hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  id="Category"
                  required
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
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
                Prep Time:
              </label>
              <input
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                required
                name="prepTime"
                value={formData.prepTime}
                onChange={handleChange}
              />
            </div>

            <div className="py-2">
              <label className="text-md font-medium text-slate-700">
                Difficulty:
              </label>
              <select
                className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 shadow-sm outline-none transition-all hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                id="Difficulty"
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
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
                Healthy:
              </label>
              <select
                className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 shadow-sm outline-none transition-all hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                id="Healthy"
                required
                name="healthy"
                value={formData.healthy}
                onChange={handleChange}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>

            <div className="py-2 flex justify-around">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-200"
                type="button"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-200"
                type="submit"
              >
                Submit Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
