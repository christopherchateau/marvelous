export const characterReducer = (state = [], action) => {
  switch (action.type) {
    case "STORE_CHARACTER":
      switch (action.direction) {
        case "BACK":
          return [action.character, ...state];
        case "FORWARD":
          return [...state, action.character];
      }
    default:
      return state;
  }
};
