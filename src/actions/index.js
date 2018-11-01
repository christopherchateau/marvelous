export const storeCharacter = (character, frontOrBack) => ({
  type: "STORE_CHARACTER",
  character,
  frontOrBack
});

export const updateStorageDetails = (currentIndex, count) => ({
  type: "UPDATE_STORAGE_DETAILS",
  currentIndex,
  count
});
