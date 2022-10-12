import React from 'react'
import cake from '../img/cake.jpg'
import "../App.css";

function Cards() {
  return (
    <div className="cards">
    <img src={cake} alt="cake" />

    <div class="container">
    <h4><b>By: Alex kim</b></h4> 
  </div>
    </div>
    
  )
}

export default Cards