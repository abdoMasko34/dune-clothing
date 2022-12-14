import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { setCollectionById } from "../../redux/shop/shop-action";
// import { selectCollection } from "../../redux/shop/shop-selector";
import CardPreview from "../shop/collection/card-preview.component";

import "./collection.style.scss";

const CollectionPage = ({ collection, setCollectionById }) => {
  const params = useParams();
  const paramsId = params.categoryId;
  setCollectionById(paramsId);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CardPreview key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collection: state.shop.collection,
});
const mapDispatchToProps = (dispatch) => ({
  setCollectionById: (collectionId) =>
    dispatch(setCollectionById(collectionId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
