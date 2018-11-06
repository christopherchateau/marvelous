export const getRandomCharacter = async url => {
  const response = await fetch(url.root + url.validation);
  const data = await response.json();
  const characterData = data.data.results[0];
  return characterData;
};

export const getComics = async (comicUri, validation) => {
  const response = await fetch(comicUri + validation);
  const comicInfo = await response.json();
  return comicInfo;
};
