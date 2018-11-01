export const storeCharacter = (character, direction) => ({
  type: "STORE_CHARACTER",
  character,
  direction
});

export const updateStorageDetails = (currentIndex, count) => ({
  type: "UPDATE_STORAGE_DETAILS",
  currentIndex,
  count
});
