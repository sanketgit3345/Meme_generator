import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";


function Card(props) {
    const navigate = useNavigate();
  return (
    <div className="card">
      <img src={props.img} alt="meme" />
      <h2>{props.title}</h2>
      <button onClick={(e)=>navigate(`/edit?url=${props.img}`)}>Edit</button>
    </div>

  );
}

export default Card;