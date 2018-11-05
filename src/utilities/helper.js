import { MD5 } from "crypto-js";
import apiKeys from "../apiKeys";
import { getRandomCharacter, getComics } from "./apiCalls";

export const randomCharacter = async () => {
  const randomId = generateRandomId();
  if (checkLocalStorage(randomId)) {
    return checkLocalStorage(randomId);
  }
  try {
    const url = prepareUrls(randomId);
    const characterData = await getRandomCharacter(url);
    const comicCovers = await comics(characterData, url.validation);
    const filteredCovers = await filterCovers(comicCovers);
    return {
      name: characterData.name,
      id: characterData.id,
      description: characterData.description || "No description found.",
      pic:
        characterData.thumbnail.path + "." + characterData.thumbnail.extension,
      comics: filteredCovers,
      favorited: false,
      show: true
    };
  } catch {
    return "failed to load";
  }
};

export const comics = async (characterData, validation) => {
  const comicCovers = await Promise.all(
    characterData.comics.items.map(async comic => {
      const comicInfo = await getComics(comic.resourceURI, validation);
      const thumbnail = comicInfo.data.results[0].thumbnail;
      return thumbnail.path + "." + thumbnail.extension;
    })
  );
  return comicCovers;
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

export const filterCovers = comicCovers => {
  return comicCovers.filter(
    (src, index) =>
      !src.includes("image_not_available") && comicCovers.indexOf(src) === index
  );
};

export const generateRandomId = () => {
  //return Math.floor(Math.random() * 9) + 1;
  return Math.floor(Math.random() * 627) + 1010801;
};

export const prepareUrls = randomId => {
  const timeStamp = Date.now();
  const hash = MD5(timeStamp + apiKeys.private + apiKeys.public);
  const root = `http://gateway.marvel.com/v1/public/characters/${randomId}`;
  const validation = `?ts=${timeStamp}&apikey=${apiKeys.public}&hash=${hash}`;
  return { root, validation };
};
