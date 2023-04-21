import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import FindBeer from "./pages/FindBeer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {/* Header */}
          <Navbar />
          {/* Content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/beers" element={<FindBeer />} />
          </Routes>
          {/* Footer */}
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
