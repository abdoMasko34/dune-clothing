import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCollectionIsFetching } from "../../redux/shop/shop-selector";

import { compose } from "redux";

import WithSpinner from "../UI/spinner/spinner.component";

import CollectionOverview from "./collection-overview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);
export default CollectionOverviewContainer;
