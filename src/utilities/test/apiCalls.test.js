import * as api from "../apiCalls";

describe("apiCalls", () => {
  describe("getRandomCharacter", () => {
    it.skip("should call fetch for random character ", () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          json: () => ({ results: "character info" })
        })
      );
      const expected = "https://marvel.com";
      api.getRandomCharacter(11111);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });
  });
});
