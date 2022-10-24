import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCollectionIsFetching } from "../../redux/shop/shop-selector";

import { compose } from "redux";

import WithSpinner from "../UI/spinner/spinner.component";

import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsFetching,
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
export default CollectionPageContainer;
