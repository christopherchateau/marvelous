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

export const toggleFavorite = id => ({
  type: "TOGGLE_FAVORITE",
  id
});

export const showFavorites = bool => ({
  type: "SHOW",
  displayFavorites: bool
});