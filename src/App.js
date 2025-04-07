import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomeIndex from "./pages/HomeIndex";
import TeamView from "./pages/TeamView";
import CursorAnimation from "./pages/CursorAnimation";


function App() {

  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<HomeIndex />} />
        <Route path="/team-view" element={<TeamView />} />
        <Route path="/cursor-animation" element={<CursorAnimation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
