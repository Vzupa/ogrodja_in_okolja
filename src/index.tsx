import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./Modules/primer"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {DodajEkipo, PrikazEkipeKomp} from "./Components";
import {ekipe1} from "./Modules/primer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const router = createBrowserRouter([
    {
        path: '/',
        element: <App /> ,
        children: [
            {
                path: '/ekipa/:ekipaID',
                element: <PrikazEkipeKomp />
            },
            {
                path: '/dodajEkipo',
                element: <DodajEkipo />
            }
        ]
    },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
