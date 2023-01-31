import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Pages
import Navbar from "./menu/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      {/* I'll wrap the entire application with BrowserRouter componente, inside this component I'll list each compente shoud be rendered for each route */}
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          {/* This a kind of parente componente for multiples different routers component */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
