import React from "react";
import "./Banner.css";
import { BANNER_CARDS } from "../../static";

function Banner() {
  return (
    <div className="banners">
      <div className="container">
        <div className="banners-wrapper">
          {BANNER_CARDS?.map((el) => (
            <div
              style={{
                backgroundImage: `url(${el.bg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              key={el.id}
              className="banners-card"
            >
              <div className="banners-card-top">
                <h1>{el.title}</h1>
                <h2>{el.price}</h2>
              </div>
              <div className="banners-card-bottom">
                <p>{el.old}</p>
                <span>{el.discount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
