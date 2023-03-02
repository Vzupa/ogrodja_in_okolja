import React from 'react';
import './App.css';
import { Menu, Noga, EkipaInfo } from './Components';
import { ekipa } from './Modules/primer';

function App() {
  return (
    <div>
      <Menu />
      <EkipaInfo ekipa={ekipa} />
      <Noga />
    </div>
  );
}

export default App;
