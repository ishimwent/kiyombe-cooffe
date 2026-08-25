import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Processing from "./pages/Processing";
import Farmers from "./pages/Farmers";
import Quality from "./pages/Quality";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;