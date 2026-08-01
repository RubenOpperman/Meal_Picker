import { Wheel } from "react-custom-roulette-r19";

import { useContext, useState } from "react";
import { ListContext } from "../context/ListContext";

import { Filter } from "../components/Filter";

export default function Spinner() {
  const { list } = useContext(ListContext);
  const [mustSpin, setMustSpin] = useState(false);
  const [winnerIndex, setWinnerIndex] = useState();
  const [winner, setWinner] = useState();

  const wheelData = list.map((dish) => ({ option: dish.name }));

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
      <Filter />
      <h1 className="text-5xl font-bold text-center text-slate-800 ">
        🍽️ Dinner Spinner
      </h1>

      <p className="text-center text-slate-500 my-6  font-bold  text-xl">
        Let fate decide tonight's meal.
      </p>
      <div className="flex justify-center">
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
text-white shadow-lg
"
        onClick={handleSpin}
      >
        🎲 Spin the Wheel
      </button>
      <div className="flex justify-center ">
        {winnerIndex !== undefined ? (
          <div className="mt-10 text-center">
            <p className="text-slate-500 font-bold text-xl">Today's Meal</p>

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
