import React from "react";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, img, size }) => {
  const navigate = useNavigate();
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="background-image"
        onClick={() => navigate(`/${title}`)}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <p className="subtitle">SHOP NOW</p>
      </div>
    </div>
  );
};

export default MenuItem;
