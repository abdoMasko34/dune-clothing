import React from "react";

const MenuItem = ({ title, img, size }) => (
  <div className={`${size} menu-item`}>
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <p className="subtitle">SHOP NOW</p>
    </div>
  </div>
);
export default MenuItem;
