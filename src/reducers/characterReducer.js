export const characterReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_CHARACTER': return [...state, action.character]
    default:
      return state;
  }
};
