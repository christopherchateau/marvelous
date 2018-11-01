import { characterReducer } from "../characterReducer";

describe("characterReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = characterReducer(undefined, {});
    expect(result).toEqual(expected);
  });

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
});
