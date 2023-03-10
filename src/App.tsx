import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SeznamEkipKomp, PrikazEkipeKomp } from "./Components"

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                {}
                <Route path="/" element={<SeznamEkipKomp />} />
                <Route path="/:ime" element={<PrikazEkipeKomp />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
