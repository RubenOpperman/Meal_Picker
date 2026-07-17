import "./App.css";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Spinner from "./pages/Spinner.jsx";
import Meals from "./pages/Meals.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Spinner" element={<Spinner />} />
        <Route path="/Meals" element={<Meals />} />
      </Routes>
    </>
  );
}

export default App;
