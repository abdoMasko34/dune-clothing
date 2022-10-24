import ShopActionTypes from "./shop-types";
export const setCollectionById = (collectionId) => ({
  type: ShopActionTypes.SET_COLLECTION_BY_ID,
  payload: collectionId,
});

export const CollectionStartFetching = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const CollectionSuccessFetching = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});
export const CollectionFailureFetching = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
