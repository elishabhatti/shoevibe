import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<h1>Shop Page</h1>} />
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/contact" element={<h1>Contact Page</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
