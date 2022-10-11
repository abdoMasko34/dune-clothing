import React, { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";

import WithSpinner from "../UI/spinner/spinner.component";

import CollectionOverview from "../collection-overview/collection-overview";
import CollectionPage from "../collection/collection.component";
import { updateCollection } from "../../redux/shop/shop-action";
import {
  firestore,
  convertCollectionSnapShotToMap,
} from "../../firebase/firebase-utili";
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const ShopPage = ({ updateCollection }) => {
  const { path } = useRouteMatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.get().then((snapShot) => {
      const collectionsMap = convertCollectionSnapShotToMap(snapShot);
      console.log("collection Map", collectionsMap);
      updateCollection(collectionsMap);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${path}`}>
        {/* <CollectionOverview /> */}
        <CollectionOverviewWithSpinner isLoading={isLoading} />
      </Route>
      <Route path={`${path}/:categoryId`}>
        {/* <CollectionPage /> */}
        <CollectionPageWithSpinner isLoading={isLoading} />
      </Route>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionsMap) =>
    dispatch(updateCollection(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
