export const selectCollection = (collections, collectionId) => {
  const collection = Object.values(collections).find(
    (collection) => collection.title.toLowerCase() === collectionId
  );
  console.log("collections in select Collection =>", collection);
  return collection;
};
