
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function CardDetails() {
    const params = useParams();

    const [card, setCard] = useState([]);
  
    useEffect(() => {
      fetch(`cards${params.artId}`)
        .then((response) => response.json())
        .then((data) => setCard(data));
    }, []);
  
 
  
    React.useEffect(() => {
      console.log("params", params);
    }, [params]);
  
    const history = useNavigate();
    const handleDelete = () => {
      fetch("/cards" + art.id, {
        method: "DELETE",
      }).then(() => {
        history("/");
      });
    };
  
    return (
      <div>
        <Navbar />
        <div className="det-container">
  
        <div className="art-dets-1" key={card.id}>
          <div className="art-image-1">
            <img src={card.image_url} alt="article url" />
          </div>
          <div className="art-det-1">
            <h2>Title:{card.title}</h2>
            <h4>{card.created_at}</h4>
            <h3>Author:{art.author}</h3>
            <h3>contact:{art.contact}</h3>
            <h4>{art.description}</h4>
          </div>
  
          <div className="btn">
            <button className="btn-view" onClick={handleDelete}>Delete</button>
            <Link to={`/reviews/${art.id}`}>
              <button className="btn-view">Review</button>
            </Link>
          
          </div>
        </div>
        </div>
      </div>
    );
}

export default CardDetails