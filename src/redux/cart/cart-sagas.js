import { takeLatest, put, call, all } from "redux-saga/effects";
import userActionTypes from "../user/user-types";
import { clearCart } from "./cart-actions";

export function* cleartCartOnSignOutSuccess() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(
    userActionTypes.SIGN_OUT_SUCCESS,
    cleartCartOnSignOutSuccess
  );
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
