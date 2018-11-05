export const cleanCharacter = (character, comicCovers) => {
  return {
    name: character.name,
    id: character.id,
    description: character.description || "No description found.",
    pic: character.thumbnail.path + "." + character.thumbnail.extension,
    comics: comicCovers,
    favorited: false,
    show: true
  };
};

export const localStoreCharacter = character => {
  const storage = getLocalStorage();
  if (storage && !checkLocalStorage(character.id)) {
    const updatedStorage = [...storage, character];
    setLocalStorage(updatedStorage);
  }
  if (!storage) {
    setLocalStorage([character]);
  }
};

export const setLocalStorage = item => {
  localStorage.setItem("marvelous", JSON.stringify(item));
};

export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("marvelous"));
};

export const checkLocalStorage = id => {
  const storage = getLocalStorage();
  if (storage) {
    return storage.find(char => char.id === id);
  }
};

export const filterPics = comicCovers => {
  return comicCovers.filter(
    (src, index) =>
      !src.includes("image_not_available") && comicCovers.indexOf(src) === index
  );
};
