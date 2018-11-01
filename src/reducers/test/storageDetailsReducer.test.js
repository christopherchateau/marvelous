import { storageDetailsReducer } from "../storageDetailsReducer";

describe("storageDetailsReducer", () => {
  it("should return the initial state", () => {
    const expected = { currentIndex: 1, count: 3 };
    const result = storageDetailsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it("should update storage details", () => {
    const mockIndex = 2;
    const mockCount = 4;
    const mockState = { currentIndex: 1, count: 3 };
    const expected = { currentIndex: 2, count: 4 };

    const action = {
      type: "UPDATE_STORAGE_DETAILS",
      currentIndex: mockIndex,
      count: mockCount
    };

    const result = storageDetailsReducer(mockState, action);
    expect(result).toEqual(expected);
  });
});
