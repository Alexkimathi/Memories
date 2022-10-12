
import './App.css';

import React from 'react'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllCards from './components/AllCards';

function App() {
  return (
    <div>

    <Router>
    <Routes>
        
        <Route path="/" element={<AllCards /> } />
        
    </Routes>
</Router>
    </div>
  );
}

export default App;
