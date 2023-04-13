import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Outlet, useOutletContext, Link} from 'react-router-dom';
import {SeznamEkipKomp, PrikazEkipeKomp, DodajEkipo} from "./Components"
import {ekipe1} from "./Modules/primer";


export function useEkipe(){
    return useOutletContext<any>();
}

function App() {
    const [ekipe, setEkipe] = React.useState(ekipe1);

  return (
    <div>
        <SeznamEkipKomp ekipe={ekipe} />
        <Link to={"/dodajEkipo"}>
            Dodaj ekipo
        </Link>
        <Outlet context={ {ekipe, setEkipe} }/>
    </div>
  );
}

export default App;
