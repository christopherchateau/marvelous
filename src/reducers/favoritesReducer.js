export const favoritesReducer = (state = false, action) =>  {
  switch(action.type) {
    case "SHOW_FAVORITES": 
      return !state;
    default:
      return state;
  }
}