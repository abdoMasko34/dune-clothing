import React from "react";
import "./card-preview.style.scss";

const CardPreview = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CardPreview;
