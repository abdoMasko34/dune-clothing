import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setCollectionById } from "../../redux/shop/shop-action";
import CardPreview from "../shop/collection/card-preview.component";

import "./collection.style.scss";

const CollectionPage = ({ collection, setCollectionById }) => {
  const params = useParams();
  const paramsId = params.categoryId;
  useEffect(() => {
    setCollectionById(paramsId);
  }, [params]);
  const { title, items } = collection;
  console.log(collection);
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
