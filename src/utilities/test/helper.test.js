import { cleanCharacter } from "../helper";

describe("helper", () => {
  it("should remove unwanted character data and add favorited & show props", () => {
    const characterData = {
      description: "n/a",
      events: {},
      id: 1010808,
      modified: "2014-12-09T17:25:54-0500",
      name: "Hawkeye (Kate Bishop)",
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1010808",
      series: {},
      stories: {},
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/10/537bad9caa831",
        extension: "jpg"
      },
      urls: []
    };
    const comicCovers = ["http://i.annihil.us/u/prod/marvel/i/mg/c/10/537bad9caa831.jpg"]
    const expected = {
      name: "Hawkeye (Kate Bishop)",
      id: 1010808,
      description: "n/a",
      pic: "http://i.annihil.us/u/prod/marvel/i/mg/c/10/537bad9caa831.jpg",
      comics: ["http://i.annihil.us/u/prod/marvel/i/mg/c/10/537bad9caa831.jpg"],
      favorited: false,
      show: true
    };
    const result = cleanCharacter(characterData, comicCovers);
    expect(result).toEqual(expected);
  });
});
