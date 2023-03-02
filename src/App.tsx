import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Footer, Main } from './Components';
import { Menu, Noga, IgralecInfo, EkipaInfo, OpozoriloKomponent, InfoKomponent } from './Components';
import { Igralec } from './Modules/Oseba';
import { ekipa } from './Modules/primer';

function App() {
  return (
    <div>
      <Menu />
      {ekipa.igralci.length < 11 ? <OpozoriloKomponent /> : <InfoKomponent />}
      <EkipaInfo ekipa={ekipa} />
      <Noga />
    </div>
  );
}

export default App;
