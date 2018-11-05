import { characterReducer } from "../characterReducer";

describe("characterReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = characterReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  describe("STORE_CHARACTER", () => {
    it("should unshift character into array if direction equals back", () => {
      const mockCharacter = { name: "Spider-Man", id: 1 };
      const mockState = [{ name: "Wolverine", id: 2 }];
      const expected = [
        { name: "Spider-Man", id: 1 },
        { name: "Wolverine", id: 2 }
      ];
      const action = {
        type: "STORE_CHARACTER",
        direction: "BACK",
        character: mockCharacter
      };
      const result = characterReducer(mockState, action);
      expect(result).toEqual(expected);
    });

    it("should push character into array if direction equals forward", () => {
      const mockCharacter = { name: "Spider-Man", id: 1 };
      const mockState = [{ name: "Wolverine", id: 2 }];
      const expected = [
        { name: "Wolverine", id: 2 },
        { name: "Spider-Man", id: 1 }
      ];
      const action = {
        type: "STORE_CHARACTER",
        direction: "FORWARD",
        character: mockCharacter
      };
      const result = characterReducer(mockState, action);
      expect(result).toEqual(expected);
    });

    it("should return previous state is direction is not indicated", () => {
      const mockCharacter = { name: "Spider-Man", id: 1 };
      const mockState = [{ name: "Wolverine", id: 2 }];
      const expected = [{ name: "Wolverine", id: 2 }];
      const action = {
        type: "STORE_CHARACTER",
        direction: "",
        character: mockCharacter
      };
      const result = characterReducer(mockState, action);
      expect(result).toEqual(expected);
    });
  });

  describe("TOGGLE_FAVORITE", () => {
    it("should find character by id and toggle favorited prop", () => {
      const mockState = [
        { name: "Spider-Man", id: 1, favorited: false },
        { name: "Wolverine", id: 2, favorited: false }
      ];
      const expected = [
        { name: "Spider-Man", id: 1, favorited: true },
        { name: "Wolverine", id: 2, favorited: false }
      ];

      const action = {
        type: "TOGGLE_FAVORITE",
        id: 1
      };
      const result = characterReducer(mockState, action);
      expect(result).toEqual(expected);
    });
  });
});
