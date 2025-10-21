import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import Trades from "./pages/Trades";
import Faculties from "./pages/Faculties";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Cursor />
      <Navbar />
      <main style={{ marginTop: 72 /* navbar height */ }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trades" element={<Trades />} />
          <Route path="/faculties" element={<Faculties />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
