import "./App.css";
import { useState } from "react";
import Transaction from "./components/Transaction";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Dashboard from "./components/pages/Dashboard";
import Total from "./components/Total";
import Title from "./components/Title";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="card">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route
              exact
              path="/"
              element={[<Title/>, <Total/>, <Transaction />]}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
