import { MD5 } from "crypto-js";
import apiKeys from "../apiKeys";
import { cleanCharacter } from "./helper";

// const min = 1010801;
// const max = 1011428;

export const getRandomCharacter = async randomCharacterId => {
  // const timeStamp = Date.now();
  // const hash = MD5(timeStamp + apiKeys.private + apiKeys.public);
  // const url = `http://gateway.marvel.com/v1/public/characters/${randomCharacterId}?ts=${timeStamp}&apikey=${apiKeys.public}&hash=${hash}`;
  // //const searchUrl = `http://gateway.marvel.com/v1/public/characters?name=spider-man&ts=${ts}&apikey=${apiKey}&hash=${hashA}`;
  // try {
  // const response = await fetch(url);
  // const data = await response.json();
  // return cleanCharacter(data.data.results[0]);
  // } catch {
  //   return 'error';
  // }
  return mockData[randomCharacterId];
};

const mockData = [
  {
    name: "spider-man1",
    id: 1,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/image_not_available/gpfF5-xH_400x400.jpg",
    comics: ["asdf"]
  },
  {
    name: "spider-man2",
    id: 2,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"]
  },
  {
    name: "spider-man3",
    id: 3,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"]
  },
  {
    name: "spider-man4",
    id: 4,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"]
  },
  {
    name: "spider-man5",
    id: 5,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"]
  },
  {
    name: "spider-man6",
    id: 6,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"]
  },
  {
    name: "spider-man7",
    id: 7,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"]
  },
  {
    name: "spider-man8",
    id: 8,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"]
  },
  {
    name: "spider-man9",
    id: 9,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"]
  },
  {
    name: "spider-man10",
    id: 10,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"]
  }
];
