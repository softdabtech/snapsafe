import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DownloadPage from "./components/DownloadPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/download/:platform" element={<DownloadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;