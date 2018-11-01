import * as actions from "../index.js";

describe("actions", () => {
  it("should have a type of STORE_CHARACTER", () => {
    const character = { name: "Spider-Man", id: 11111 };
    const direction = "BACK";
    const expectedAction = {
      type: "STORE_CHARACTER",
      character,
      direction
    };
    const result = actions.storeCharacter(character, direction);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of UPDATE_STORAGE_DETAILS", () => {
    const currentIndex = 1;
    const count = 3;
    const expectedAction = {
      type: "UPDATE_STORAGE_DETAILS",
      currentIndex,
      count
    };
    const result = actions.updateStorageDetails(currentIndex, count);
    expect(result).toEqual(expectedAction);
  });
});
