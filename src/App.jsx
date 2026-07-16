import "./App.css";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Spinner from "./pages/Spinner.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Spinner" element={<Spinner />} />
      </Routes>
    </>
  );
}

export default App;
