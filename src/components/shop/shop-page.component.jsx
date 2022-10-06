import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverview from "../collection-overview/collection-overview";
import CollectionPage from "../collection/collection.component";
import { updateCollection } from "../../redux/shop/shop-action";
import {
  firestore,
  convertCollectionSnapShotToMap,
} from "../../firebase/firebase-utili";
const ShopPage = ({ updateCollection }) => {
  const { path } = useRouteMatch();
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    const unsubscribeFromSnapShot = collectionRef.onSnapshot((snapshot) => {
      const collectionsMap = convertCollectionSnapShotToMap(snapshot);
      console.log(collectionsMap);
      // updateCollection(collectionsMap);
    });
    unsubscribeFromSnapShot();
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
  updateCollection: (collectionsMap) =>
    dispatch(updateCollection(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
