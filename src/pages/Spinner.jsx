import { Wheel } from "react-custom-roulette-r19";

import { useContext, useState } from "react";
import { ListContext } from "../context/ListContext";

import { Filter } from "../components/Filter";

export default function Spinner() {
  const { list } = useContext(ListContext);
  const [mustSpin, setMustSpin] = useState(false);
  const [winnerIndex, setWinnerIndex] = useState();
  const [winner, setWinner] = useState();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredData, setFilteredData] = useState({
    category: "",
    prepTime: "",
    difficulty: "",
    healthy: false,
    favourite: false,
  });

  const filteredMeals = list.filter((dish) => {
    const categoryMatch =
      !filteredData.category || dish.category === filteredData.category;

    const prepMatch =
      !filteredData.prepTime || dish.prepTime <= filteredData.prepTime;

    const difficultyMatch =
      !filteredData.difficulty || dish.difficulty == filteredData.difficulty;

    const healthyMatch =
      !filteredData.healthy || dish.healthy == filteredData.healthy;

    const favouriteMatch =
      !filteredData.favourite || dish.favourite == filteredData.favourite;

    return (
      categoryMatch &&
      prepMatch &&
      difficultyMatch &&
      healthyMatch &&
      favouriteMatch
    );
  });

  const wheelData = filteredMeals.map((dish) => ({ option: dish.name }));

  const handleSpin = () => {
    if (!mustSpin) {
      const winnerIndex = Math.floor(Math.random() * wheelData.length);
      setWinner("");
      setWinnerIndex(winnerIndex);
      setMustSpin(true);
    }
  };

  return (
    <>
      <div className="bg-blue-800 p-5  flex flex-col gap-3">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-200 "
          onClick={() => {
            isFilterOpen ? setIsFilterOpen(false) : setIsFilterOpen(true);
          }}
        >
          {isFilterOpen ? "close Filter" : "Open Filter"}
        </button>
      </div>

      {isFilterOpen ? (
        <Filter filteredData={filteredData} setFilteredData={setFilteredData} />
      ) : (
        ""
      )}
      <h1 className="text-5xl font-bold text-center my-5 text-slate-800 ">
        🍽️ Dinner Spinner
      </h1>
      <p className="text-center text-slate-500 my-6  font-bold  text-xl">
        Let fate decide tonight's meal.
      </p>
      <div className="flex justify-center">
        {filteredMeals.length > 0 ? (
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={winnerIndex}
            data={wheelData}
            backgroundColors={["#3e3e3e", "#df3428"]}
            textColors={["#ffffff"]}
            onStopSpinning={() => {
              setMustSpin(false);
              setWinner(wheelData[winnerIndex].option);
            }}
          />
        ) : (
          <div className="border-2 border-red-500 p-2 rounded-xl">
            <p className="text-black text-lg font-bold tracking-wide">
              No meals available to spin!
            </p>
            <p className="text-black text-md mt-1">
              Try adjusting your filters or adding new items.
            </p>
          </div>
        )}
      </div>
      <button
        className="
mt-8 mx-auto flex
items-center justify-center
px-8 py-4
rounded-full bg-indigo-600
hover:bg-indigo-700 active:scale-95
transition-all duration-200
text-lg font-semibold
text-white shadow-lg mb-3
"
        onClick={handleSpin}
      >
        🎲 Spin the Wheel
      </button>
      <div className="flex justify-center ">
        {winnerIndex !== undefined ? (
          <div className="mt-10 text-center">
            <p className="text-slate-500 font-bold text-xl">
              Today's Meal Is...
            </p>

            <h2 className="text-4xl font-bold text-emerald-600 mt-2">
              {winner}
            </h2>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
