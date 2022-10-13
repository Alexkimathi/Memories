import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function AllCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/cards")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);


  

  return (
    <div>
      <Navbar />
      <div className="memories-board">
        <h1 className="board">Memories Board</h1>
      </div>

      <div className="art-container">
        {cards.map((card) => (
          <div className="art-dets" key={card.id}>
            <div className="art-image">
              <img src={card.image_url} alt="article url" />
            </div>
            <div className="art-det">
              <h2>
                Title - <span>{card.title}</span>
              </h2>
              <h3>Creator - {card.name}</h3>
              <h4>{card.created_at}</h4>

              <Link to={`/artsdetails/${card.id}`}>
                <button className="btn-view">View Card</button>
              </Link>

              <Link to={`/reviews/${card.id}`}>
              <button className="btn-view">Comment</button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCards;
