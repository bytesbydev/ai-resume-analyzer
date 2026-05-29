import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Analyzing from "./pages/Analyzing";
import Results from "./pages/Results";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analyzing" element={<Analyzing />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
};

export default App;