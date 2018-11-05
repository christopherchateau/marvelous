import * as apiCalls from "../apiCalls";

describe("apiCalls", () => {
  const url = { root: "https://marvel.com", validation: "/apiKey" };

  describe("getRandomCharacter", () => {
    it("should call fetch for random character with correct params", () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => ({ data: { results: ["character info"] } })
        })
      );
      apiCalls.getRandomCharacter(url);
      expect(window.fetch).toHaveBeenCalledWith(url.root + url.validation);
    });

    it("should return a json'd response", async () => {
      const expected = "character info";
      const result = await apiCalls.getRandomCharacter(url);
      expect(result).toBe(expected);
    });
  });

  describe("getComics", () => {
    it("should call fetch for comics with correct params", () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => "comic url"
        })
      );
      apiCalls.getComics(url.root, url.validation);
      expect(window.fetch).toHaveBeenCalledWith(url.root + url.validation);
    });

    it("should return a json'd response", async () => {
      const expected = "comic url";
      const result = await apiCalls.getComics(url);
      expect(result).toBe(expected);
    });
  });
});
