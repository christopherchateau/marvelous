import { combineReducers } from 'redux';
import { characterReducer } from './characterReducer'
import { storageDetailsReducer } from './storageDetailsReducer'

const rootReducer = combineReducers({
  characters: characterReducer,
  storageDetails: storageDetailsReducer
});

export default rootReducer;