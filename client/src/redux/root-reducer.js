import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import dirctoryReducer from "./dirctory/dirctory-reducer";
import shopReducer from "./shop/shop-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "dirctory", "shop"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  dirctory: dirctoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
