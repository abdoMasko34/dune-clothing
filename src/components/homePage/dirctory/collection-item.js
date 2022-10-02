import React from "react";
import { useHistory } from "react-router-dom";

const CollectionItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="background-image"
        onClick={() => history.push(`/${linkUrl}`)}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <p className="subtitle">SHOP NOW</p>
      </div>
    </div>
  );
};

export default CollectionItem;
