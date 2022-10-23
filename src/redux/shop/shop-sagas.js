import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  CollectionSuccessFetching,
  CollectionFailureFetching,
} from "./shop-action";
import {
  firestore,
  convertCollectionSnapShotToMap,
} from "../../firebase/firebase-utili";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapShotToMap, snapShot);

    yield put(CollectionSuccessFetching(collectionsMap));
  } catch (error) {
    yield put(CollectionFailureFetching(error.message));
  }
}
export function* fetchCollectionsStart() {
  yield takeLatest("FETCH_COLLECTION_START", fetchCollectionsAsync);
}
export function* shopSaga() {
  yield all([call(fetchCollectionsAsync)]);
}
