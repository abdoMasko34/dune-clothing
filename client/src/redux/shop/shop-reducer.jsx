import { selectCollection } from "./shop-utils";
import ShopActionTypes from "./shop-types";
// import SHOP_DATA from "./collections-data";
const INTIAL_STATE = {
  collections: [],
  collection: null,
  isFetching: false,
};

const shopReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.SET_COLLECTION_BY_ID:
      return {
        ...state,
        collection: selectCollection(state.collections, action.payload),
      };
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
