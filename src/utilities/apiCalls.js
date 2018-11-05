import { MD5 } from "crypto-js";
import apiKeys from "../apiKeys";
import { checkLocalStorage, cleanCharacter, filterPics } from "./helper";

export const getRandomCharacter = async randomId => {
  if (checkLocalStorage(randomId)) {
    return checkLocalStorage(randomId);
  }
  const timeStamp = Date.now();
  const hash = MD5(timeStamp + apiKeys.private + apiKeys.public);
  const rootUrl = `http://gateway.marvel.com/v1/public/characters/${randomId}`;
  const validation = `?ts=${timeStamp}&apikey=${apiKeys.public}&hash=${hash}`;
  try {
    const response = await fetch(rootUrl + validation);
    const data = await response.json();
    const filteredComics = await getComics(data, validation);
    const character = cleanCharacter(data.data.results[0], filteredComics);
    return character;
  } catch {
    return "error";
  }
};

export const getComics = async (data, validation) => {
  const comicCovers = await Promise.all(
    data.data.results[0].comics.items.map(async comic => {
      const data = await fetch(comic.resourceURI + validation);
      const comicInfo = await data.json();
      const thumbnail = comicInfo.data.results[0].thumbnail;
      return thumbnail.path + "." + thumbnail.extension;
    })
  );
  return filterPics(comicCovers);
};

const mockData = [
  {
    name: "spider-man1",
    id: 1,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/image_not_available/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: false
  },
  {
    name: "spider-man2",
    id: 2,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: false
  },
  {
    name: "spider-man3",
    id: 3,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: true
  },
  {
    name: "spider-man4",
    id: 4,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: false
  },
  {
    name: "spider-man5",
    id: 5,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: true
  },
  {
    name: "spider-man6",
    id: 6,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: false
  },
  {
    name: "spider-man7",
    id: 7,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: true
  },
  {
    name: "spider-man8",
    id: 8,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: false
  },
  {
    name: "spider-man9",
    id: 9,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: false
  },
  {
    name: "spider-man10",
    id: 10,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: false
  }
];
