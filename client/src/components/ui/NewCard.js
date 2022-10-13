import React, { useState } from "react";
import Card from "../ui/Card"

import "../../App.css";

import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function NewArtsForm() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image_url, setImage_url] = useState("");


  const history = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const newcards= { name, title, image_url};

    fetch('/cards', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newcards),
    }).then(() => {
      history("/");
    });
  }

  return (
    <div className="back">
    <Navbar />
    <div className="try">
    <Card>
    <div className="heading-post">
    <h1>Memory card Details</h1>
    </div>
      <form className="form" onSubmit={submitHandler}>
        <div className="control">
        <label htmlFor="name">Card-Owner</label>
        <input
          type="text"
          required
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
          <label htmlFor="title">Card-Title</label>
          <input
            type="text"
            required
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="image">Image_url</label>
          <input
            type="url"
            required
            id="image"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          />
        </div>
       
        <div className="controls">
          <button className="btn-view-1">CreateCard</button>
        </div>
      </form>
    </Card>
    </div>
    </div>
  );
}

export default NewArtsForm;
