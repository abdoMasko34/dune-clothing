import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
// import thunk from "redux-thunk";

import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./root-sagas";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [logger, sagaMiddleware];

// if (process.env.NODE_ENV !== "development") {
//   middleWares.push(logger);
// }

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export default { store, persistor };
