import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { updateCollection } from "../../redux/shop/shop-action";
import { useEffect } from "react";
import {
  firestore,
  convertCollectionSnapShotToMap,
} from "../../firebase/firebase-utili";

import CollectionOverview from "../collection-overview/collection-overview";
import CollectionPage from "../collection/collection.component";

const ShopPage = (props) => {
  const { path } = useRouteMatch();
  useEffect(() => {
    const { updateCollection } = props;
    const collectionRef = firestore.collection("collections");
    console.log(collectionRef);

    const unsubscribeFromSnapshot = () =>
      collectionRef.onSnapshot(async (snapshot) => {
        const collectionMap = convertCollectionSnapShotToMap(snapshot);
        console.log("collection", collectionRef);
        updateCollection(collectionMap);
      });
    unsubscribeFromSnapshot();
  }, []);
  return (
    <div className="shop-page">
      <Route exact path={`${path}`}>
        <CollectionOverview />
      </Route>
      <Route path={`${path}/:categoryId`}>
        <CollectionPage />
      </Route>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionMap) =>
    dispatch(updateCollection(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
