import React, { useEffect, useState } from "react";
import Api from "../api";
import Card from "../components/card";
import "../App.css"; // Import the CSS file

function Homepage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api().then((memes) => {
      setData(memes.data.memes);
    });
  }, []);

  return (
    <div className="homepage">
      <h1 className="title">Meme Generator</h1>
      <div className="card-container">
        {data.map((item) => (
          <Card key={item.id} img={item.url} title={item.name} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;