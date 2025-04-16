import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomeIndex from "./pages/HomeIndex";
import TeamView from "./pages/TeamView";
import CursorAnimation from "./pages/CursorAnimation";
import MotionPath from "./pages/MotionPath";
import Harison from "./pages/Harison";
import Work from "./pages/Work";
import CharlieDrink from "./pages/CharlieDrink";


function App() {

  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<HomeIndex />} />
        <Route path="/team-view" element={<TeamView />} />
        <Route path="/cursor-animation" element={<CursorAnimation />} />
        <Route path="/motionpath" element={<MotionPath />} />
        <Route path="/harison" element={<Harison />} />
        <Route path="/harison/work" element={<Work />} />
        <Route path="/charlie-drink" element={<CharlieDrink />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
