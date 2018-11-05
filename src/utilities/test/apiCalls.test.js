import React from "react";
import * as api from "../apiCalls";
import { cleanCharacter } from "../helper";

describe("apiCalls", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("setLocalStorage", () => {
    it("should set item to local storage", () => {
      expect(localStorage).toHaveLength(0);
      api.setLocalStorage("info");
      expect(localStorage).toHaveLength(1);
    });
  });

  describe("getLocalStorage", () => {
    it("should retrieve info from local storage", () => {
      api.setLocalStorage("info");
      const retrieved = api.getLocalStorage();
      expect(localStorage).toHaveLength(1);
      expect(retrieved).toEqual("info");
    });
  });
  describe("checkLocalStorage", () => {
    it("should find characters in local storage based on id", () => {
      const character = { name: "Spider-Man", id: 1 };
      api.setLocalStorage([character]);
      const found = api.checkLocalStorage(1);
      expect(found).toEqual(character);
    });

    it("should return false if character isn't found", () => {
      const character = { name: "Spider-Man", id: 1 };
      api.setLocalStorage([character]);
      const found = api.checkLocalStorage(1111111);
      expect(found).toBeUndefined();
    });
  });
  describe("filterPics", () => {
    it("should filter missing images", () => {
      const comicCovers = [
        "image_not_available.com",
        "image_totally_available.com"
      ];
      const filteredCovers = api.filterPics(comicCovers);
      expect(filteredCovers).toHaveLength(1);
      expect(filteredCovers[0]).toEqual(comicCovers[1]);
    });
  });

  describe("localStoreCharacter", () => {
    it("should store character in array if local storage is empty", () => {
      const character = { name: "Spider-Man", id: 1 };
      api.localStoreCharacter(character);

      expect(localStorage).toHaveLength(1);
      const retrieved = api.getLocalStorage();
      expect(retrieved[0]).toEqual(character);
    });

    it("should add character to local storage if not already stored", () => {
      const characters = [
        { name: "Spider-Man", id: 1 },
        { name: "Wolverine", id: 2 }
      ];
      api.localStoreCharacter(characters[0]);
      api.localStoreCharacter(characters[1]);

      const retrieved = api.getLocalStorage();
      expect(retrieved[0]).toEqual(characters[0]);
      expect(retrieved[1]).toEqual(characters[1]);
    });
    it("should not add duplicate characters to storage", () => {
      const characters = [
        { name: "Spider-Man", id: 1 },
        { name: "Wolverine", id: 2 }
      ];
      api.localStoreCharacter(characters[0]);
      api.localStoreCharacter(characters[0]);

      const retrieved = api.getLocalStorage();
      expect(retrieved[0]).toEqual(characters[0]);
      expect(retrieved[1]).toBeUndefined();
    });
  });
});
