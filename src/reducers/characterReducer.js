export const characterReducer = (state = [], action) => {
  switch (action.type) {
    case "STORE_CHARACTER":
      switch (action.direction) {
        case "BACK":
          return [action.character, ...state];
        case "FORWARD":
          return [...state, action.character];
      }
    case "TOGGLE_FAVORITE":
      return state.map(char => {
        return char.id === action.id
          ? { ...char, favorited: !char.favorited }
          : char;
      });
    default:
      return state;
  }
};
