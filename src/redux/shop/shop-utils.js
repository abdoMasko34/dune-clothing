export const selectCollection = (collections, collectionId) => {
  const collection = collections.find(
    (collection) => collection.title.toLowerCase() === collectionId
  );
  return collection;
};
