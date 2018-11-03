import { cleanCharacter } from "../helper";

describe("helper", () => {
  it("should remove unwanted character data and add favorited & show props", () => {
    const characterData = {
      comics: { items: [] },
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
    const expected = {
      name: "Hawkeye (Kate Bishop)",
      id: 1010808,
      description: "n/a",
      pic: "http://i.annihil.us/u/prod/marvel/i/mg/c/10/537bad9caa831.jpg",
      comics: [],
      favorited: false,
      show: true
    };
    const result = cleanCharacter(characterData);
    expect(result).toEqual(expected);
  });
});
