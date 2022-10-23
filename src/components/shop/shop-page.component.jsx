import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionOverviewContainer from "../collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.component.container";

import { CollectionStartFetching } from "../../redux/shop/shop-action";
import { selectCollectionIsFetching } from "../../redux/shop/shop-selector";

const ShopPage = ({ fetchCollectionStart }) => {
  const { path } = useRouteMatch();
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shop-page">
      <Route exact path={`${path}`}>
        <CollectionOverviewContainer />
      </Route>
      <Route path={`${path}/:categoryId`}>
        <CollectionPageContainer />
      </Route>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectCollectionIsFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: (collectionsMap) =>
    dispatch(CollectionStartFetching(collectionsMap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
