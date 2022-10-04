export const setCollectionById = (collectionId) => ({
  type: "SET_COLLECTION_BY_ID",
  payload: collectionId,
});
export const updateCollection = (collectionsMap) => ({
  type: "UPDATE_COLLECTIONS",
  payload: collectionsMap,
});
