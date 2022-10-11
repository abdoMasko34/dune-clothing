import { selectCollection } from "./shop-utils";
// import SHOP_DATA from "./collections-data";
const INTIAL_STATE = {
  collections: [],
  collection: null,
};

const shopReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "SET_COLLECTION_BY_ID":
      return {
        ...state,
        collection: selectCollection(state.collections, action.payload),
      };

    case "UPDATE_COLLECTIONS":
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
