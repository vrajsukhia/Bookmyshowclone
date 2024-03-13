import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import MoviesPr from './context/Movies.context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MoviesPr>
      <App />
    </MoviesPr>
    </BrowserRouter>
  </React.StrictMode>
);


