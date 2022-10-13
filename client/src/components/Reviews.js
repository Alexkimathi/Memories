import React, { useState } from "react";
import Card from "../components/ui/Card"

import "../../src/App.css";


import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function NewArtsForm() {
  const [name, setName] = useState("");
  const [image_url, setImage_url] = useState("");
  const [video_url, setVideo_url] = useState("");
  const [description, setDescription] = useState("");
  

  const history = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const newpost = { name, image_url, video_url, description };

    fetch('/posts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newpost),
    }).then(() => {
      history("/");
    });
  }

  return (
    <div className="back">
    <Navbar />
    <Card>
    <div className="heading-post">
    <h1>Post Arts Details</h1>
    </div>
      <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="name">name</label>
          <input
            type="text"
            required
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="image_url">Image_url</label>
          <input
            type="url"
            required
            id="image_url"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="video_url">video_url</label>
          <input
            type="text"
            required
            id="video_url"
            value={video_url}
            onChange={(e) => setVideo_url(e.target.value)}
          />
        </div>
    
        <div className="control">
          <label htmlFor="description">Comment</label>
          <textarea
            id="description"
            required
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="controls">
          <button className="btn-view-1">Comment</button>
        </div>
      </form>
    </Card>
    </div>
  );
}

export default NewArtsForm;
