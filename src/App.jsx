import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FireCursor from "./components/FireCursor";
import MusicPlayer from "./components/MusicPlayer";
import About from "./pages/About";

function App() {
  return (
    <>
      {/* Floating particles background */}
      <div className="particles">
        {Array.from({ length: 60 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <FireCursor />

      <MusicPlayer />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;