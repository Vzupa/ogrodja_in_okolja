import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Outlet, useOutletContext} from 'react-router-dom';
import { SeznamEkipKomp, PrikazEkipeKomp } from "./Components"
import {ekipe1} from "./Modules/primer";


export function useEkipe(){
    return useOutletContext<any>();
}


function App() {
    const [ekipe, setEkipe] = React.useState(ekipe1);

  return (
    <div>
        <SeznamEkipKomp />
        <Outlet context={ {ekipe, setEkipe} }/>
    </div>
  );
}

export default App;
