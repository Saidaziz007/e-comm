import React, { useEffect, useState } from "react";
import "./Cards.css";
import rate from "../../assets/rate.svg";
import axios from "axios";

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setCards(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(cards);
  return (
    <section>
      <div className="container">
        <div className="cards-top">
          <h1>BEST SELLER</h1>
          <ul className="cards-list">
            <li className="cards-item">All</li>
            <li className="cards-item-1">Bags</li>
            <li className="cards-item-1">Sneakers</li>
            <li className="cards-item-1">Belt</li>
            <li className="cards-item-1">Sunglasses</li>
          </ul>
        </div>
        <div className="cards-wrapper">
          {cards?.map((el) => (
            <div key={el.id} className="card">
              <div className="card-img">
                <img src={el.thumbnail} alt="" />
              </div>
              <div className="card-info">
                <h1>{el.title}</h1>
                <img src={rate} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
