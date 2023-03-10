import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SeznamEkip from "./Components/HomeKomp/SeznamEkip"
import PrikazEkipe from "./Components/PrikazEkip/PrikazEkipe"

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                {}
                <Route path="/" element={<SeznamEkip />} />
                <Route path="/:ime" element={<PrikazEkipe />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
