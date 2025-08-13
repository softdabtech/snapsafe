// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import FeaturesSection from "./components/FeaturesSection";
import CorporateSection from "./components/CorporateSection";
import FAQSection from "./components/FAQSection";
import AboutSection from "./components/AboutSection";
import DownloadPage from "./components/DownloadPage";
// Если хотите, создавать отдельную ContactPage — см. вариант ниже
import ContactModal from "./components/ContactModal"; // если хотите рендерить как страницу, можно создать wrapper

function ContactPageWrapper() {
  // если ContactModal — модалка, вы можете рендерить её как обычный компонент
  // либо заменить на ContactSection / ContactPage когда добавите такой компонент
  return <div style={{ padding: 24 }}><h1>Contact</h1><ContactModal isOpen={true} onClose={() => {}}/></div>;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<FeaturesSection />} />
          <Route path="/corporate" element={<CorporateSection />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactPageWrapper />} />
          <Route path="/download/:platform" element={<DownloadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;