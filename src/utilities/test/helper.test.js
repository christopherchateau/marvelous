import * as helper from "../helper";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
jest.mock("../apiCalls");

describe("helper", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("randomCharacter", () => {
    it("should return character data in expected format and add favorited & show props", async () => {
      const expected = {
        name: "Hawkeye (Kate Bishop)",
        id: 1010808,
        description: "n/a",
        pic: "http://i.annihil.us/u/prod/marvel/i/mg/c/10/537bad9caa831.jpg",
        comics: [],
        favorited: false,
        show: true
      };
      const result = await helper.randomCharacter();
      expect(result).toEqual(expected);
    });
  });

  describe("comics", () => {
    it("should return comic covers in expected format", async () => {
      const characterData = {
        comics: {
          items: [
            "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/515f0cae4224e.jpg"
          ]
        }
      };
      const expected = [
        "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/515f0cae4224e.jpg"
      ];
      const result = await helper.comics(characterData, "url");
      expect(result).toEqual(expected);
    });
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

  describe("filterCovers", () => {
    it("should filter missing images ", () => {
      const comicCovers = [
        "image_not_available.com",
        "image_totally_available.com"
      ];
      const filteredCovers = helper.filterCovers(comicCovers);
      expect(filteredCovers).toHaveLength(1);
      expect(filteredCovers[0]).toEqual(comicCovers[1]);
    });
    it("should filter duplicate url's ", () => {
      const comicCovers = [
        "image_totally_available.com",
        "image_totally_available.com"
      ];
      const filteredCovers = helper.filterCovers(comicCovers);
      expect(filteredCovers).toHaveLength(1);
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

  describe.skip("generateRandomId", () => {
    it("should generate a random ID between 1010801 and 1011428", () => {
      const randomId = helper.generateRandomId();
      expect(randomId).toBeGreaterThanOrEqual(1010801);
      expect(randomId).toBeLessThanOrEqual(1011428);
    });
  });
});
