import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';


import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
*{margin:0;
padding:0;
box-sizing:border-box ;}

html,body{
  font-family: 'Oswald', sans-serif;
  font-size: 62.5%;

  @media (max-width: 768px) {
    font-size:50%;
  }
  @media (max-width: 450px) {
    font-size:40%;
  }
}
body{
  font-size: 1.6rem;
}

`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle />

    <App />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals