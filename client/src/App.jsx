import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import FindBeer from "./pages/FindBeer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/findbeer" element={<FindBeer />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
