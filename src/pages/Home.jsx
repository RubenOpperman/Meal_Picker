import { useContext } from "react";
import { ListContext } from "../context/ListContext";

function Home() {
  const { list, setList } = useContext(ListContext);

  const addDish = () => {
    const newDish = {
      id: list.length() + 1,
      name: "Pizza",
      category: "Dinner",
      prepTime: 40,
      difficulty: 2,
      healthy: false,
      favourite: true,
      timesCooked: 0,
      lastCooked: null,
    };

    setList(...list, newDish);
  };

  return (
    <div className="flex justify-center text-2xl">
      <h1>Welcome to Dinner Spinner</h1>
    </div>
  );
}

export default Home;
