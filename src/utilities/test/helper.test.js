import * as helper from "../helper";

describe("helper", () => {

  beforeEach(() => {
    localStorage.clear();
  });

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
    const result = helper.cleanCharacter(characterData, comicCovers);
    expect(result).toEqual(expected);
  });

  describe("setLocalStorage", () => {
    it("should set item to local storage", () => {
      expect(localStorage).toHaveLength(0);
      helper.setLocalStorage("info");
      expect(localStorage).toHaveLength(1);
    });
  });

  describe("getLocalStorage", () => {
    it("should retrieve info from local storage", () => {
      helper.setLocalStorage("info");
      const retrieved = helper.getLocalStorage();
      expect(localStorage).toHaveLength(1);
      expect(retrieved).toEqual("info");
    });
  });
  describe("checkLocalStorage", () => {
    it("should find characters in local storage based on id", () => {
      const character = { name: "Spider-Man", id: 1 };
      helper.setLocalStorage([character]);
      const found = helper.checkLocalStorage(1);
      expect(found).toEqual(character);
    });

    it("should return false if character isn't found", () => {
      const character = { name: "Spider-Man", id: 1 };
      helper.setLocalStorage([character]);
      const found = helper.checkLocalStorage(1111111);
      expect(found).toBeUndefined();
    });
  });
  describe("filterPics", () => {
    it("should filter missing images", () => {
      const comicCovers = [
        "image_not_available.com",
        "image_totally_available.com"
      ];
      const filteredCovers = helper.filterPics(comicCovers);
      expect(filteredCovers).toHaveLength(1);
      expect(filteredCovers[0]).toEqual(comicCovers[1]);
    });
  });

  describe("localStoreCharacter", () => {
    it("should store character in array if local storage is empty", () => {
      const character = { name: "Spider-Man", id: 1 };
      helper.localStoreCharacter(character);

      expect(localStorage).toHaveLength(1);
      const retrieved = helper.getLocalStorage();
      expect(retrieved[0]).toEqual(character);
    });

    it("should add character to local storage if not already stored", () => {
      const characters = [
        { name: "Spider-Man", id: 1 },
        { name: "Wolverine", id: 2 }
      ];
      helper.localStoreCharacter(characters[0]);
      helper.localStoreCharacter(characters[1]);

      const retrieved = helper.getLocalStorage();
      expect(retrieved[0]).toEqual(characters[0]);
      expect(retrieved[1]).toEqual(characters[1]);
    });

    it("should not add duplicate characters to storage", () => {
      const characters = [
        { name: "Spider-Man", id: 1 },
        { name: "Wolverine", id: 2 }
      ];
      helper.localStoreCharacter(characters[0]);
      helper.localStoreCharacter(characters[0]);

      const retrieved = helper.getLocalStorage();
      expect(retrieved[0]).toEqual(characters[0]);
      expect(retrieved[1]).toBeUndefined();
    });
  });
});
