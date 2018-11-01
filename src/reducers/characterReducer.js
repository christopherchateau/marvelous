export const characterReducer = (state = [], action) => {
  switch (action.type) {
    case "STORE_CHARACTER":
      switch (action.frontOrBack) {
        case "FRONT":
          return [action.character, ...state];
        case "BACK":
          return [...state, action.character];
      }
    default:
      return state;
  }
};
