import { combineReducers } from "redux";
import { characterReducer } from "./characterReducer";
import { storageDetailsReducer } from "./storageDetailsReducer";
import { favoritesReducer } from "./favoritesReducer";

const rootReducer = combineReducers({
  characters: characterReducer,
  storageDetails: storageDetailsReducer,
  showFavorites: favoritesReducer
});

export default rootReducer;
