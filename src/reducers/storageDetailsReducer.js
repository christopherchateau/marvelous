export const storageDetailsReducer = (
  state = { currentIndex: 1, count: 3 },
  action
) => {
  switch (action.type) {
    case "UPDATE_STORAGE_DETAILS":
      return { currentIndex: action.currentIndex, count: action.count };
    default:
      return state;
  }
};
