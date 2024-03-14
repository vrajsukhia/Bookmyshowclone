
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Routes,Route} from "react-router-dom";


import Homepage from './pages/Home.Page';
import MoviePage from './pages/Movie.Page';
import PlaysPage from './pages/Plays.Page';
import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {};
axios.defaults.params["api_key"] = "b0380404025ff71ff7222783b12710df";


function App() {
 return <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/movie/:id' element={<MoviePage />} />
   <Route path='/plays' element={<PlaysPage />} />
 </Routes>
  
}

export default App;
