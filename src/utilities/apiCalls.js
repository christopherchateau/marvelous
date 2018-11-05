import { checkLocalStorage, cleanCharacter, filterPics, prepareUrls } from "./helper";

export const getRandomCharacter = async randomId => {
  if (checkLocalStorage(randomId)) {
    return checkLocalStorage(randomId);
  }
  const url = prepareUrls(randomId);
  try {
    const response = await fetch(url.root + url.validation);
    const data = await response.json();
    const filteredComics = await getComics(data, url.validation);
    const character = cleanCharacter(data.data.results[0], filteredComics);
    return character;
  //return mockData[randomId]
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
    favorited: false,
    show: true
  },
  {
    name: "spider-man2",
    id: 2,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: false,
    show: true
  },
  {
    name: "spider-man3",
    id: 3,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: true,
    show: true
  },
  {
    name: "spider-man4",
    id: 4,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: false,
    show: true
  },
  {
    name: "spider-man5",
    id: 5,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: true,
    show: true
  },
  {
    name: "spider-man6",
    id: 6,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: false,
    show: true
  },
  {
    name: "spider-man7",
    id: 7,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: true,
    show: true
  },
  {
    name: "spider-man8",
    id: 8,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: false,
    show: true
  },
  {
    name: "spider-man9",
    id: 9,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: false,
    show: true
  },
  {
    name: "spider-man10",
    id: 10,
    description: "description",
    pic:
      "https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg",
    comics: ["asdf"],
    favorited: false,
    show: true
  }
];
