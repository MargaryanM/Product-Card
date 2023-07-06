import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProdCard from "./ProdCard";
import NavBar from "./NavBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProdCard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
