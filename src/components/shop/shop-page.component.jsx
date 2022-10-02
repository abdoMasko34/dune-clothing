import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

import CollectionOverview from "../collection-overview/collection-overview";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
  const { path } = useRouteMatch();
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

export default ShopPage;
