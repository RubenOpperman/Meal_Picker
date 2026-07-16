import { useState } from "react";
import { ListContext } from "./ListContext";

export function ListProvider({ children }) {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Pizza",
      category: "Dinner",
      prepTime: 40,
      difficulty: 2,
      healthy: false,
      favourite: true,
      timesCooked: 0,
      lastCooked: null,
    },
  ]);

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
}
