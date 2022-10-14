
import './App.css';

import React from 'react'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllCards from './components/AllCards';
import Home from './components/Home';
import NewCard from './components/ui/NewCard';
import Reviews from './components/Reviews'


function App() {
  return (
    <div>

    <Router>
    <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/allcards/" element={<AllCards />} />
        <Route path="/newcards/" element={<NewCard /> } />
        <Route path="/reviews/:reviewId" element={<Reviews /> } />
        
    </Routes>
</Router>
    </div>
  );
}

export default App;
