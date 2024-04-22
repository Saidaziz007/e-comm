import React, { useEffect, useState } from "react";
import "./Cards.css";
import rate from "../../assets/rate.svg";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

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
                <div className="card-like">
                  <button>
                    <FaRegHeart />
                  </button>
                  <FiShoppingCart />
                </div>
              </div>
              <div className="card-info">
                <h1>{el.title}</h1>
                <img src={rate} alt="" />
                <div className="card-price">
                  <h3 className="card-price-1">${el.price}</h3>
                  <h4 className="card-price-2">${el.price * 2}</h4>
                  <h3 className="card-price-discount">
                    {el.discountPercentage}% Off
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
