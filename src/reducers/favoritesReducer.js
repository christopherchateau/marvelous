export const favortesReducer = (state = false, action) =>  {
  switch(action.type) {
    case "SHOW_FAVORITES": 
      return action.displayFavorites;
    default:
      return state;
  }
}