import React from "react";
import "./preview-collection.style.scss";
import CardPreview from "./card-preview.component";
const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h2 className="title">{title.toUpperCase()}</h2>
    <div className="preview">
      {items
        .filter((el, idx) => idx < 4)
        .map(({ id, ...item }) => (
          <CardPreview key={id} {...item} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
