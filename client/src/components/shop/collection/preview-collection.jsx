import React from "react";
import "./preview-collection.style.scss";
import { Link } from "react-router-dom";
import CardPreview from "./card-preview.component";
const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <Link className="title" to={`shop/${title.toLowerCase()}`}>
      {title.toUpperCase()}
    </Link>
    <div className="preview">
      {items
        .filter((el, idx) => idx < 4)
        .map((item) => (
          <CardPreview key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
