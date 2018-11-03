import { favoritesReducer } from "../favoritesReducer";

describe("favoritesReducer", () => {
  it("should return the initial state", () => {
    const expected = false;
    const result = favoritesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should toggle showFavorites boolean", () => {
    const action = {
      type: "SHOW_FAVORITES"
    };
    let mockState = false;
    let result = favoritesReducer(mockState, action);
    expect(result).toEqual(true);

    mockState = true;
    result = favoritesReducer(mockState, action);
    expect(result).toEqual(false);
  }); 
});
